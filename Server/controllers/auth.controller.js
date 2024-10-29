import bcrypt from "bcrypt"; //Library to hashing the passwords to store in database
import zod from "zod";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import ENV_VARIABLES from "../constants.js";
import validateInput from "../Services/InputValidate.service.js";
import { sendOTPVerification, sendMail } from "../Services/2FaAuth.service.js";

// INPUT VALIDATION USING ZOD

const signupSchema = zod.object({
  username: zod
    .string()
    .min(2, { message: "Username must contains atleast two characters" }),
  email: zod.string().email({ message: "Invalid email" }),
  password: zod
    .string()
    .min(6, { message: "Password must contains atleast 6 characters" }),
});

const loginSchema = zod.object({
  username: zod
    .string()
    .min(2, { message: "Username must contains atleast 2 characters" }),
  password: zod
    .string()
    .min(6, { message: "Password must contains atleast 6 characters" }),
});

const signup = async (req, res) => {
  //DB SIGNUP OPERATION
  try {
    const { username, email, password } = req.validatedInputs;
    if (!username || !email || !password) {
      return res.status(400).json({ error: "Missing required fields!!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // CREATE A USER AND SAVE IT TO THE DATABASE
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    try {
      const otp = await sendOTPVerification(newUser);
      const sendingMail = await sendMail(req, res, otp);
      if (sendingMail.success) {
        res.status(201).json({
          message: "User registered successfully and otp sent successfully!!",
          userId: newUser.id,
          username: username,
          email: email,
          avatar: newUser.avatar,
          createdAt: newUser.createdAt,
        });
      }
    } catch (error) {
      res.status(201).json({
        message: "User registered successfully but failed to send OTP",
        username: username,
        email: email,
        userId: newUser.id,
        avatar: newUser.avatar,
        createdAt: newUser.createdAt,
      });
    }
  } catch (error) {
    console.error(`Signup error => ${error}`);
    res.status(500).json({ error: "Failed to create user!!" });
  }
};

const login = async (req, res) => {
  //DB LOGIN OPERATION
  const { username, password } = req.validatedInputs;

  try {
    // CHECK IF THE USER EXIST
    const user = await prisma.user.findUnique({
      where: { username: username },
    });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid Credentials !!, User doesn't exist" });
    }

    // CHECK IF THE PASSWORD IS CORRECT
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Invalid Credentials !!, Invalid password" });
    }

    // GERNERATE COOKIE TOKEN AND GENERATE IT TO THE USER
    const age = 1000 * 60 * 60 * 24 * 7; // EXPIRES AFTER EVERY 7 DAYS (MILLISECONDS IN A WEEK)
    const token = jwt.sign(
      {
        username: user.username,
        email: user.email,
        id: user.id,
      },
      ENV_VARIABLES.JWT_SECRETKEY,
      { expiresIn: age }
    );

    const bearer_token = `bearer ${token}`;

    res
      .cookie("access_token", bearer_token, {
        httpOnly: true,
        maxAge: age,
        secure: true,
        sameSite: "lax",
        path: "/", // ENSURE THE THE COOKIE IS AVAILABLE FOR ALL THE PATHS
      })
      .status(200)
      .json({
        message: "User logedin successfully!!",
        username: user.username,
        email: user.email,
        userId: user.id,
        avatar: user.avatar,
        createdAt: user.createdAt,
      });
  } catch (error) {
    console.error(`Login error => ${error}`);
    res.status(500).json({ error: "Failed to login user!!" });
  }
};

const logout = (req, res) => {
  //DB LOGOUT OPERATION
  const token = req.cookies.access_token;
  try {
    if (!req.cookies.access_token) {
      return res
        .status(400)
        .json({ message: "No any cookie found,You are not logged in" });
    }

    res
      .clearCookie("access_token")
      .status(200)
      .json({
        message: "User loged out successfully!!",
        tokenInfo: {
          token: token,
          username: req.user.username,
          email: req.user.email,
        },
      });
  } catch (error) {
    console.error(`Logout error => ${error}`);
    res.status(500).json({ error: "Failed to logout user!!" });
  }
};

const google = (req, res) => {
  //DB LOGIN WITH GOOGLE OPERATION
};

const verifyEnteredOTP = async (req, res) => {
  try {
    const { otp, userId } = req.body;

    if (!otp || !userId) {
      res.status(400).json({ message: "otp and user is required" });
    }

    const verifyOTP = await prisma.userOTPVerification.findFirst({
      where: {
        otp: otp,
        userId: userId,
        expiredAt: {
          gt: new Date(),
        },
      },
    });

    if (verifyOTP) {
      await prisma.userOTPVerification.delete({
        where: {
          id: verifyOTP.id,
        },
      });
      res.status(200).json({ message: "User verified OTP correctly!!" });
    } else {
      res.status(403).json({ message: "User entered wroung OTP" });
    }
  } catch (error) {
    console.error(`Verifying OTP error => ${error}`);
    res.status(500).json({ error: "Failed to verify the OTP!!" });
  }
};

const ForgotPassUser = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid Credentials !!, User doesn't exist" });
    }

    const otp = await sendOTPVerification(user);
    const sendingMail = await sendMail(user, req, res, otp);
    if (sendingMail.success) {
      res.status(201).json({
        message: "OTP sent successfully!!",
        userId: user.id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        createdAt: user.createdAt,
      });
    }
  } catch (error) {
    console.error(`Verifying OTP error => ${error}`);
    res.status(500).json({ error: "Failed to verify the OTP!!" });
  }
};

export {
  signup,
  login,
  logout,
  google,
  signupSchema,
  loginSchema,
  validateInput,
  verifyEnteredOTP,
  ForgotPassUser,
};

import bcrypt from "bcrypt"; //Library to hashing the passwords to store in database
import zod from "zod";
import nodemailer from "nodemailer";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import ENV_VARIABLES from "../constants.js";
import validateInput from "../Services/InputValidate.service.js";

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

    console.log(`The new user is : ${newUser}`);

    res.status(201).json({
      message: "User registered successfully",
      username: username,
      email: email,
      password: password,
    });
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
      res
        .status(401)
        .json({ message: "Invalid Credentials!!,User doesn't exist" });
    }

    // CHECK IF THE PASSWORD IS CORRECT
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res
        .status(401)
        .json({ message: "Invalid Credentials!!,Invalid password" });
    }

    // GERNERATE COOKIE TOKEN AND GENERATE IT TO THE USER
    const age = 1000 * 60 * 60 * 24 * 7; // EXPIRES AFTER EVERY 7 DAYS (MILLISECONDS IN A WEEK)
    const token = jwt.sign(
      {
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
      })
      .status(200)
      .json({ message: "User logedin successfully!!" });
  } catch (error) {
    console.error(`Login error => ${error}`);
    res.status(500).json({ error: "Failed to login user!!" });
  }
};

const logout = (req, res) => {
  //DB LOGOUT OPERATION

  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json({ message: "User loged out successfully!!" });
  } catch (error) {
    console.error(`Logout error => ${error}`);
    res.status(500).json({ error: "Failed to logout user!!" });
  }
};

const google = (req, res) => {
  //DB LOGIN WITH GOOGLE OPERATION
};

const sendMail = async(req,res) => {

  const transporter = nodemailer.createTransport({
    host: "Gmail",
    secure: true,
    port: 587,
    auth: {
      user: ENV_VARIABLES.SENDERS_MAIL,
      pass: ENV_VARIABLES.PASSWORD
    },
  });
};

const sendOTPVerification = async () => {
  try {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
  } catch (error) {}
};

export {
  signup,
  login,
  logout,
  google,
  signupSchema,
  loginSchema,
  validateInput,
};

import bcrypt from "bcrypt"; //Library to hashing the passwords to store in database
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import ENV_VARIABLES from "../constants.js";

const signup = async (req, res) => {
  //DB SIGNUP OPERATION

  try {
    const { username, email, password } = req.body;
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
  const { username, password } = req.body;

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
    const age = 1000 * 60 * 60 * 24 * 7; //expires after every 7 days (milliseconds in 7 days)
    const token = jwt.sign(
      {
        id: user.id,
      },
      ENV_VARIABLES.JWT_SECRETKEY,
      { expiresIn: age }
    );

    res
      .cookie("access_token", token, {
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
  //db operation
};

export { signup, login, logout, google };

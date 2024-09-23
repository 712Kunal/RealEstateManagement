import bcrypt from "bcrypt"; //Library to hashing the passwords
import prisma from "../lib/prisma.js";

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
    
  } catch (error) {
    console.error(`Login error => ${error}`);
    res.status(500).json({ error: "Failed to login user!!" });
  }
};

const logout = (req, res) => {
  //db operation
};

const google = (req, res) => {
  //db operation
};

export { signup, login, logout, google };

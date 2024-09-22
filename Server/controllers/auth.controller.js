import bcrypt from "bcrypt"; //Library to hashing the passwords
import prisma from "../lib/prisma.js";

const signup = async (req, res) => {
  //db operation

  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: "Missing required fields!!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a user and save it to the database
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

const login = (req, res) => {
  //db operation
};

const logout = (req, res) => {
  //db operation
};

const google = (req, res) => {
  //db operation
};

export { signup, login, logout, google };

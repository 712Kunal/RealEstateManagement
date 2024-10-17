import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../Features/Auth/AuthSlice.js";
import Button from "@mui/material/Button";
import apiRequest from "../lib/apiRequest.js";
import { data } from "framer-motion/client";

function Login() {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  // HANDLE LOGIN SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await apiRequest.post("/auth/login", {
        email,
        password,
      });

      dispatch(
        setUser({
          id: response.data.userId,
          username: response.data.username,
          email: response.data.email,
          avatar: response.data.avatar,
          createdAt: response.data.createdAt,
        })
      );
      setError(""); // CLEAR THE ERROR MESSAGE
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center">
      <div className="bg-gray-900 p-4 rounded-xl shadow-2xl w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-6 w-full max-w-md"
        >
          <h1 className="text-5xl text-purple-500 font-Fredoka mb-2">
            Welcome Back!
          </h1>
          <input
            className="w-full text-gray-200 rounded-lg px-4 py-3 bg-gray-800 outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 placeholder:tracking-widest text-xl font-medium"
            type="email"
            placeholder="EMAIL"
            name="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Please enter a valid email address"
          />
          <input
            className="w-full text-gray-200 rounded-lg px-4 py-3 bg-gray-800 outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 placeholder:tracking-widest text-xl font-medium"
            type="password"
            placeholder="PASSWORD"
            name="password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            title="Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)"
          />
          <Button
            className="!w-full !text-2xl !rounded-lg !tracking-wider !p-3 !text-white !bg-purple-600 !hover:bg-purple-800 !transition !duration-300"
            variant="contained"
            type="submit"
          >
            LOGIN
          </Button>

          {error ? <p className="text-red-400 text-center">{error}</p> : null}
        </form>
      </div>
    </div>
  );
}

export default Login;

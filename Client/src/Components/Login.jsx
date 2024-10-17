import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../Features/Auth/AuthSlice.js";
import Button from "@mui/material/Button";
import apiRequest from "../lib/apiRequest.js";

function Login() {
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  // HANDLE LOGIN SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const response = await apiRequest.post("/auth/login", {
        username,
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
      setError(error.response.data.message);
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
            type="text"
            placeholder="USERNAME"
            name="username"
          />
          <input
            className="w-full text-gray-200 rounded-lg px-4 py-3 bg-gray-800 outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 placeholder:tracking-widest text-xl font-medium"
            type="password"
            placeholder="PASSWORD"
            name="password"
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

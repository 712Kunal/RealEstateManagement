import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser, selectUser } from "../Features/Auth/AuthSlice.js";
import Button from "@mui/material/Button";
import apiRequest from "../lib/apiRequest.js";
import ForgotPassInput from "./ForgotPassInput.jsx";
import LoadingOverlay from "../Pages/Auth/LoadingOverlay.jsx";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // REDUX STORAGE
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [showForgotPassword, setShowForgotPassword] = useState(false);

  // LOADING OVERLAY
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Current user data in Redux store:", user);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setMessage("Logging in . . .");

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const response = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      // STORING THE USER TO THE REDUX STORE AND LOCAL STORAGE WHICH IS HANDLED BY THE REDUX TOOLKIT
      dispatch(
        setUser({
          id: response.data.userId,
          username: response.data.username,
          email: response.data.email,
          avatar: response.data.avatar,
          createdAt: response.data.createdAt,
        })
      );
      setError("");
      setLoading(false);

      // NAVIGATE THE USER TO THE HOMEPAGE
      navigate("/app/homepage");
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    setLoading(false);
    setShowForgotPassword(true);
  };

  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center">
      {loading ? <LoadingOverlay message={message} /> : null}

      <div className="backdrop-blur-lg bg-gray-900/40 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700/50">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-6 w-full max-w-md"
        >
          <div className="text-center space-y-2">
            <h1 className="text-5xl bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent font-Fredoka">
              Welcome Back!
            </h1>
            <p className="text-gray-400 text-lg">Please sign in to continue</p>
          </div>

          <div className="w-full space-y-4">
            <input
              className="w-full text-gray-100 rounded-lg px-4 py-3 bg-gray-800/50 border border-gray-700/50 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition duration-300 placeholder:text-gray-400 placeholder:tracking-widest text-xl font-medium"
              type="text"
              placeholder="USERNAME"
              name="username"
            />
            <input
              className="w-full text-gray-100 rounded-lg px-4 py-3 bg-gray-800/50 border border-gray-700/50 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition duration-300 placeholder:text-gray-400 placeholder:tracking-widest text-xl font-medium"
              type="password"
              placeholder="PASSWORD"
              name="password"
            />
          </div>

          <div className="w-full space-y-4">
            <Button
              className="!w-full !text-2xl !rounded-lg !tracking-wider !p-3 !text-white !bg-gradient-to-r !from-violet-600 !to-indigo-600 hover:!from-violet-700 hover:!to-indigo-700 !transition !duration-300 !shadow-lg hover:!shadow-violet-500/25"
              variant="contained"
              type="submit"
            >
              LOGIN
            </Button>

            {error && (
              <p className="text-red-400 text-center bg-red-400/10 py-2 rounded-lg border border-red-400/20">
                {error}
              </p>
            )}
          </div>

          <div className="flex flex-col items-center justify-center gap-2 w-full">
            <div className="flex items-center justify-center gap-2">
              <span className="text-gray-400">Don't have an account ?</span>
              <span
                className="text-violet-400 cursor-pointer hover:text-violet-300 hover:underline font-Fredoka transition duration-300"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </span>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2">
                <span
                  className="text-violet-400 cursor-pointer hover:text-violet-300 hover:underline font-Fredoka transition duration-300"
                  onClick={handleForgotPassword}
                >
                  Forgot Password ?
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>

      {showForgotPassword && (
        <div>
          <ForgotPassInput
            open={showForgotPassword}
            onClose={() => setShowForgotPassword(false)}
          />
        </div>
      )}
    </div>
  );
}

export default Login;

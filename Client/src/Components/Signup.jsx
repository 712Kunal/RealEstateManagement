import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import apiRequest from "../lib/apiRequest.js";
import { FcGoogle } from "react-icons/fc";
import Button from "@mui/material/Button";
import TwoFactorAuth from "./TwoFactorAuth";
import TwofaVerifyPopup from "./TwofaVerifyPopup";
import LoadingOverlay from "../Pages/Auth/LoadingOverlay.jsx";
import handleSubmitGoogleOAuth from "../lib/GoogleOAuth.js";

import {
  setUser,
  setVerified,
  selectUser,
} from "../Features/Auth/AuthSlice.js";

function Signup() {
  const [is2faOpen, setIs2faOpen] = useState(false);
  const [twoFaVerified, setTwoFaVerified] = useState(false);
  // LOADING OVERLAY
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    console.log("Current user data in Redux store:", user);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setMessage("Creating your account...");

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await apiRequest.post("/auth/signup", {
        username,
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
      setError("");
      setLoading(false);
      setIs2faOpen(true);
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  const handleGoogleSignin = () => {
    handleSubmitGoogleOAuth(navigate);
  };

  const handle2faVerify = async (otpCode) => {
    if (!user) {
      console.error(`No user data found!!`);
      return;
    }

    setLoading(true);
    setMessage("Verifying your identity . . .");
    try {
      const verifyOTPResponse = await apiRequest.post(
        "/auth/getOTPVerification",
        {
          userId: user.id,
          otp: otpCode,
        }
      );
      setTwoFaVerified(true);
      dispatch(setVerified());
      setError("");
    } catch (error) {
      throw new Error(error.response.data.error);
    } finally {
      setLoading(false);
      setIs2faOpen(false);
    }

    setIs2faOpen(false);
  };

  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center">
      {loading ? <LoadingOverlay message={message} /> : null}

      <div className="backdrop-blur-lg bg-gray-900/40 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700/50">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-6 w-full max-w-md"
        >
          <h1 className="text-5xl bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent font-Fredoka mb-2">
            Create An Account
          </h1>
          <input
            className="w-full text-gray-100 rounded-lg px-4 py-3 bg-gray-800/50 border border-gray-700/50 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition duration-300 placeholder:text-gray-400 placeholder:tracking-widest text-xl font-medium"
            type="text"
            placeholder="USERNAME"
            name="username"
            pattern="^[a-zA-Z0-9_]{3,15}$"
            title="Username must be between 3 and 15 characters long and can only contain letters, numbers, and underscores."
          />
          <input
            className="w-full text-gray-100 rounded-lg px-4 py-3 bg-gray-800/50 border border-gray-700/50 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition duration-300 placeholder:text-gray-400 placeholder:tracking-widest text-xl font-medium"
            type="email"
            placeholder="EMAIL"
            name="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Please enter a valid email address"
          />
          <input
            className="w-full text-gray-100 rounded-lg px-4 py-3 bg-gray-800/50 border border-gray-700/50 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition duration-300 placeholder:text-gray-400 placeholder:tracking-widest text-xl font-medium"
            type="password"
            placeholder="PASSWORD"
            name="password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            title="Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)"
          />

          <Button
            className="!w-full !text-2xl !rounded-lg !tracking-wider !p-3 !text-white !bg-gradient-to-r !from-violet-600 !to-indigo-600 hover:!from-violet-700 hover:!to-indigo-700 !transition !duration-300 !shadow-lg hover:!shadow-violet-500/25"
            variant="contained"
            type="submit"
          >
            Create Account
          </Button>

          {error && (
            <p className="text-red-400 text-center bg-red-400/10 py-2 rounded-lg border border-red-400/20">
              {error}
            </p>
          )}

          <div className="w-full flex items-center my-2">
            <div className="flex-grow h-px bg-gray-700/50"></div>
            <span className="text-gray-400 text-md px-4">OR CONTINUE WITH</span>
            <div className="flex-grow h-px bg-gray-700/50"></div>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignin}
            className="w-full flex items-center justify-center gap-2 bg-gray-800/50 border border-gray-700/50 text-gray-100 font-semibold py-3 px-4 rounded-lg hover:bg-gray-700/50 transition duration-300"
          >
            <FcGoogle className="text-2xl" />
            <span>Sign up with Google</span>
          </button>

          <p className="text-gray-400">
            Already have an account?{" "}
            <span
              className="text-violet-400 cursor-pointer hover:text-violet-300 hover:underline font-Fredoka transition duration-300"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>

      {is2faOpen && (
        <div>
          <TwoFactorAuth
            open={is2faOpen}
            onVerify={handle2faVerify}
            onClose={() => setIs2faOpen(false)}
          />
        </div>
      )}

      {twoFaVerified && (
        <TwofaVerifyPopup
          open={twoFaVerified}
          onClose={() => setTwoFaVerified(false)}
        />
      )}
    </div>
  );
}

export default Signup;

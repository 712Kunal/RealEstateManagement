import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import apiRequest from "../lib/apiRequest.js";
import { FcGoogle } from "react-icons/fc";
import Button from "@mui/material/Button";
import TwoFactorAuth from "./TwoFactorAuth";
import TwofaVerifyPopup from "./TwofaVerifyPopup";

import {
  setUser,
  setVerified,
  selectUser,
} from "../Features/Auth/AuthSlice.js";

function Signup() {
  const [is2faOpen, setIs2faOpen] = useState(false);
  const [twoFaVerified, setTwoFaVerified] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  // ADD THE USEEFFECT HOOK TO LOG THE CURRENT USER DATA IN THE REDUX STORE
  useEffect(() => {
    console.log("Current user data in Redux store:", user);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

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
      navigate("/");
      setIs2faOpen(true);
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  const handle2faVerify = async (otpCode) => {
    if (!user) {
      console.error(`No user data found!!`);
      return;
    }

    //SEND THE OTP TO THE BACKEND FOR THE VERIFICATION
    try {
      const verifyOTPResponse = await apiRequest.post(
        "/auth/getOTPVerification",
        {
          userId: user.id,
          otp: otpCode,
        }
      );
      setTwoFaVerified(true);
      // DISPATCH ACTION TO UPDATE VERIFIED STATUS IN REDUX
      dispatch(setVerified());
      setError("");
    } catch (error) {
      throw new Error(error.response.data.error);
    }

    //CLOSE THE POPUP AFTER VERIFICATION
    setIs2faOpen(false);
  };

  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center">
      <div className="bg-gray-900 p-4 rounded-xl shadow-2xl w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-6 w-full max-w-md"
        >
          <h1 className="text-5xl text-purple-500 font-Fredoka mb-2">
            Create An Account
          </h1>
          <input
            className="w-full text-gray-200 rounded-lg px-4 py-3 bg-gray-800 outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 placeholder:tracking-widest text-xl font-medium"
            type="text"
            placeholder="USERNAME"
            name="username"
            pattern="^[a-zA-Z0-9_]{3,15}$"
            title="Username must be between 3 and 15 characters long and can only contain letters, numbers, and underscores."
          />
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
            Create Account
          </Button>

          {error ? <p className="text-red-400 text-center">{error}</p> : null}

          <div className="w-full flex items-center my-2">
            <div className="flex-grow h-px bg-gray-600"></div>
            <span className="text-gray-400 text-md px-4">OR CONTINUE WITH</span>
            <div className="flex-grow h-px bg-gray-600"></div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition duration-300">
            <FcGoogle className="text-2xl" />
            <span>Sign up with Google</span>
          </button>

          <p className="text-gray-400">
            Already have an account?{" "}
            <span
              className="text-cyan-400 cursor-pointer hover:underline font-Fredoka transition duration-300"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>

      {is2faOpen ? (
        <div>
          <TwoFactorAuth
            open={is2faOpen}
            onVerify={handle2faVerify}
            onClose={() => {
              setIs2faOpen(false);
            }}
          />
        </div>
      ) : null}

      {twoFaVerified ? (
        <TwofaVerifyPopup
          open={twoFaVerified}
          onClose={() => {
            setTwoFaVerified(false);
          }}
        />
      ) : null}
    </div>
  );
}

export default Signup;

import { React, useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import Button from "@mui/material/Button";
import TwoFactorAuth from "./TwoFactorAuth";
import {
  setUser,
  setVerified,
  selectUser,
} from "../Features/Auth/AuthSlice.js";

function Signup() {
  const [is2faOpen, setIs2faOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  // ADD THE USEEFFECT HOOK TO LOG THE CURRENT USER DATA IN THE REDUX STORE
  useEffect(() => {
    console.log("Current user data in Redux store:", user);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await axios.post(
        "http://localhost:3005/api/auth/signup",
        {
          username,
          email,
          password,
        }
      );

      console.log(response.data);

      dispatch(
        setUser({
          id: response.data.userId,
          username: response.data.username,
          email: response.data.email,
        })
      );

      setIs2faOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handle2faVerify = async (otpCode) => {
    if (!user) {
      console.error(`No user data found!!`);
      return;
    }

    //SEND THE OTP TO THE BACKEND FOR THE VERIFICATION
    try {
      const verifyOTPResponse = await axios.post(
        "http://localhost:3005/api/auth/getOTPVerification",
        {
          userId: user.id,
          otp: otpCode,
        }
      );

      console.log(verifyOTPResponse.data);

      // DISPATCH ACTION TO UPDATE VERIFIED STATUS IN REDUX
      dispatch(setVerified());
    } catch (error) {
      console.error(`otp verify failed: ${error}`);
    }

    //CLOSE THE POPUP AFTER VERIFICATION
    setIs2faOpen(false);
  };

  return (
    <div className="w-full h-screen overflow-hidden">
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
          />
          <input
            className="w-full text-gray-200 rounded-lg px-4 py-3 bg-gray-800 outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 placeholder:tracking-widest text-xl font-medium"
            type="email"
            placeholder="EMAIL"
            name="email"
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
            Create Account
          </Button>

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
              onClick={() => Navigate("/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>

      {/* IMAGE RENDERING */}
      <div className="w-2/5 h-3/4">
        <img
          className="w-full h-full object-cover"
          src="src\assets\signup.png"
          alt="#SignUp_image"
        />
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
    </div>
  );
}

export default Signup;

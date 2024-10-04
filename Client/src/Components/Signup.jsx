import React from "react";
import { FcGoogle } from "react-icons/fc";
import Button from "@mui/material/Button";

function Signup() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="ml-52 flex justify-center w-96 h-96">
          <form className="size-full max-w-[360px] flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-Fredoka text-center text-white font-semibold mb-2">
              Create an account
            </h1>
            <input
              className="w-full bg-[#18181b] px-4 py-3 rounded-md border border-slate-700 outline-none text-slate-300 placeholder:text-gray-2 font-exo tracking-widest text-base xl:text-lg font-medium"
              type="text"
              placeholder="USERNAME"
            />
            <input
              className="w-full bg-[#18181b] px-4 py-3 rounded-md border border-slate-700 outline-none text-slate-300 placeholder:text-gray-2 font-exo tracking-widest text-base xl:text-lg font-medium"
              type="email"
              placeholder="EMAIL"
            />
            <input
              className="w-full bg-[#18181b] px-4 py-3 rounded-md border border-slate-700 outline-none text-slate-300 placeholder:text-gray-2 font-exo tracking-widest text-base xl:text-lg font-medium"
              type="password"
              placeholder="PASSWORD"
            />
            <Button
              variant="contained"
              className="w-full tracking-wide !font-sans !text-xl text-white !p-2 rounded-lg"
            >
              Create Account
            </Button>
            <div className="w-full flex items-center my-1">
              <div className="flex-grow h-px bg-gray-600"></div>
              <span className="px-4 text-sm text-gray-400">
                OR CONTINUE WITH
              </span>
              <div className="flex-grow h-px bg-gray-600"></div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition duration-300">
              <FcGoogle className="text-2xl" />
              <span>Sign up with Google</span>
            </button>

            <p className="text-slate-200">
              Already have an account?{" "}
              <a className="text-[#645cf8] hover:underline cursor-pointer">
                Login
              </a>
            </p>
          </form>
        </div>

        {/* IMAGE RENDERING */}
        <div className="w-2/5 h-3/4">
          <img
            className="w-full h-full object-cover"
            src="/signup.png"
            alt="#SignUp_image"
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;

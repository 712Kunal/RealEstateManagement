import React from "react";

function Signup() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="ml-52 flex justify-center w-96 h-96">
          <form className="size-full max-w-[360px] flex flex-col items-center justify-center gap-5">
            <h1 className="text-5xl font-Fredoka text-center text-white font-semibold mb-5">
              Sign Up
            </h1>
            <input
              className="w-full bg-[#18181b] px-4 py-3 rounded-md border border-slate-700 outline-none text-slate-300 placeholder:text-gray-2 font-exo  tracking-widest text-base xl:text-lg font-medium"
              type="text"
              placeholder="USERNAME"
            />
            <input
              className="w-full bg-[#18181b] px-4 py-3 rounded-md border border-slate-700 outline-none text-slate-300 placeholder:text-gray-2 font-exo  tracking-widest text-base xl:text-lg font-medium"
              type="text"
              placeholder="EMAIL"
            />
            <input
              className="w-full bg-[#18181b] px-4 py-3 rounded-md border border-slate-700 outline-none text-slate-300 placeholder:text-gray-2 font-exo  tracking-widest text-base xl:text-lg font-medium"
              type="text"
              placeholder="PASSWORD"
            />
            <button className="bg-[#5b21b6] font-sans tracking-wide text-2xl text-white p-3 px-16 rounded-lg hover:bg-[#4c1d95]">
              Create An Account
            </button>
            <p className="text-slate-200">
              Already have an account ? <a className="text-[#4f46e5]">Login</a>
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

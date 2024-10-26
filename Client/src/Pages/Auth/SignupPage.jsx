import React from "react";
import Signup from "../../Components/Signup.jsx";
import Spline from '@splinetool/react-spline';

function SignupPage() {
  return (
    <div className="relative flex justify-center items-center h-screen w-full bg-gray-800 overflow-hidden">
      {/* SVG Background */}
      <div
        className="absolute inset-y-0 left-0 right-0 z-0"
        style={{
          backgroundImage: "url('src/assets/SVG/signupwave.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex grow md:flex-row justify-evenly items-center w-full max-w-6xl mx-auto p-5">
        <Signup />
        <img
          src="src/assets/signup.png"
          className="hidden md:block mt-0 w-1/2 h-1/2"
          alt="signup page picture"
        />
          
        {/* <div className="spline hidden md:block w-1/2 h-1/2">
          <Spline
            scene="https://prod.spline.design/mIJvZwE7zVdzkulC/scene.splinecode"
            width={1200}
            height={1200}
          />
        </div> */}
      </div>
    </div>
  );
}

export default SignupPage;

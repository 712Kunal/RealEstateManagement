import React from "react";
import Signup from "../../Components/Signup.jsx";
import Spline from "@splinetool/react-spline";

function SignupPage() {
  return (
    <div className="relative h-screen w-full bg-gray-800 overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/t6xePpiAw8YhOFRq/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex grow md:-left-44 w-full h-full">
        <Signup />
      </div>
    </div>
  );
}

export default SignupPage;

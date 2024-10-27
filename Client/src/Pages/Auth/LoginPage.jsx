import React from "react";
import Spline from '@splinetool/react-spline';
import Login from "../../Components/Login.jsx";

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
        <Login />
      </div>
    </div>
  );
}

export default SignupPage;
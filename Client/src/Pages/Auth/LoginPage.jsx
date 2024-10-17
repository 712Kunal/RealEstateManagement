import React from 'react'
import Login from '../../Components/Login.jsx'

function LoginPage() {
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
        <Login />
        <img
          src="src/assets/login.png"
          className="hidden md:block mt-0 w-2/3 h-1/2"
          alt="login page picture"
        />
      </div>
    </div>
  )
}

export default LoginPage
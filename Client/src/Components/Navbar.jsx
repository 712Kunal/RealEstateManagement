import React from "react";

function Navbar() {
  return (
    <div
      className="w-full overflow-x-hidden fixed top-0 left-0 right-0 z-50 drop-shadow-lg"
      style={{
        backgroundImage: "url(src/assets/SVG/navbarWave.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <nav className="flex flex-grow items-center justify-between mx-4 py-3">
        {/* LOGO */}
        <div className="flex items-center gap-20">
          <img 
            src="src/assets/logo.png" 
            alt="logo" 
            className="w-52 mt-1 hover:scale-105 transition-transform duration-300" 
          />

          {/* NAVBAR ITEMS */}
          <div>
            <ul className="flex items-center justify-around gap-16 text-white text-lg">
              <li className="cursor-pointer hover:text-emerald-300 transition-colors duration-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-300 group-hover:w-full transition-all duration-300"></span>
              </li>
              <li className="cursor-pointer hover:text-emerald-300 transition-colors duration-300 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-300 group-hover:w-full transition-all duration-300"></span>
              </li>
              <li className="cursor-pointer hover:text-emerald-300 transition-colors duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-300 group-hover:w-full transition-all duration-300"></span>
              </li>
              <li className="cursor-pointer hover:text-emerald-300 transition-colors duration-300 relative group">
                Agents
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-300 group-hover:w-full transition-all duration-300"></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="buttons flex items-center justify-center gap-5">
          <button className="bg-gradient-to-r from-teal-400 to-emerald-400 text-white px-5 py-2 rounded-xl font-semibold hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Login
          </button>
          <button className="bg-gradient-to-r from-violet-400 to-purple-500 text-white px-5 py-2 rounded-xl font-semibold hover:from-purple-500 hover:to-violet-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
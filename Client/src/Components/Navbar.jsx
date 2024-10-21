import React from "react";

function Navbar() {
  return (
    <div
      className="w-full overflow-x-hidden fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundImage: "url(src/assets/SVG/navbarWave.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <nav className="flex flex-grow items-center justify-between mx-4">
        {/* LOGO */}
        <div className="flex items-center gap-20">
          <img src="src/assets/logo.png" alt="logo" className="w-52 mt-1" />

          {/* NAVBAR ITEMS */}
          <div>
            <ul className="flex items-center justify-around gap-16 text-white text-lg">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Agents</li>
            </ul>
          </div>
        </div>

        <div className="buttons flex items-center justify-center gap-5">
          <button className="bg-white text-black p-2">Login</button>
          <button className="bg-black text-white p-2">Signup</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

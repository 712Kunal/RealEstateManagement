import React from "react";

function Navbar() {
  return (
    <nav
      className="w-full overflow-x-hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-around gap-2"
      style={{
        backgroundImage: "url(src/assets/SVG/navbarWave.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* LOGO */}
      <div>
        <img src="src/assets/logo.png" alt="logo" className="w-56" />
      </div>

      {/* NAVBAR ITEMS */}
      

    </nav>
  );
}

export default Navbar;

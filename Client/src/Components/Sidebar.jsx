import { React, useState } from "react";
import { IoMenu } from "react-icons/io5";

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="menu-icon fixed right-2 top-2 text-white cursor-pointer md:hidden z-50">
        <IoMenu 
          className="text-4xl" 
          onClick={() => setMenuOpen(!menuOpen)} 
        />
      </div>

      {/* Sidebar overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar content */}
      <div 
        className={`fixed top-0 right-0 h-screen w-1/2 border-2 border-white bg-pink-300 text-white transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-white">
          <a href="" className="hover:text-emerald-300 transition-colors duration-300">HOME</a>
          <a href="" className="hover:text-emerald-300 transition-colors duration-300">ABOUT</a>
          <a href="" className="hover:text-emerald-300 transition-colors duration-300">CONTACT</a>
          <a href="" className="hover:text-emerald-300 transition-colors duration-300">AGENT</a>
          <a href="" className="hover:text-emerald-300 transition-colors duration-300">SIGN UP</a>
          <a href="" className="hover:text-emerald-300 transition-colors duration-300">LOGIN</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
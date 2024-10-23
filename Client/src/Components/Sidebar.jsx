import React from "react";

function Sidebar() {
  return (
    <div className="menu flex flex-col items-center justify-center absolute right-0 top-0 bottom-0 h-scree w-1/2 bg-black text-white md:hidden">
      <a href="">HOME</a>
      <a href="">ABOUT</a>
      <a href="">CONTACT</a>
      <a href="">AGENT</a>
      <a href="">SIGN UP</a>
      <a href="">LOGIN</a>
    </div>
  );
}

export default Sidebar;

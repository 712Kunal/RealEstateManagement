import {React, useState} from "react";
import { IoMenu } from "react-icons/io5";


function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="menu flex flex-col items-center justify-center absolute right-0 top-0 bottom-0 h-scree w-1/2 bg-black text-white md:hidden">
      <div className="menu-icon block text-white cursor-pointer md:hidden mr-4 z-20">
          {" "}
          <IoMenu className="text-4xl" onClick={() => setMenuOpen(!menuOpen)} />
        </div>

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

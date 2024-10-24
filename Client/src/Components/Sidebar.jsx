import { React, useState } from "react";
import { IoMenu } from "react-icons/io5";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import InputIcon from "@mui/icons-material/Input";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* MENU ICON */}
      <div className="menu-icon fixed right-2 top-2 text-white bg-[#09090b] rounded-full cursor-pointer md:hidden z-[51]">
        {menuOpen ? (
          <MenuOpenIcon
            className="!text-4xl"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        ) : (
          <IoMenu className="text-4xl" onClick={() => setMenuOpen(!menuOpen)} />
        )}
      </div>

      {/* SIDEBAR OVERLAY */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar content */}
      <div
        className={`fixed top-0 right-0 h-screen z-50 bg-[#09090b] w-1/2  transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative top-12  flex flex-col items-center h-full gap-2 px-2 text-white font-sidebar font-side text-xl">
          <a
            href=""
            className="w-full flex items-center justify-center gap-1 p-2 rounded-lg bg-[#121216] hover:text-emerald-300 transition-colors duration-300"
          >
            <HomeIcon className="text-cyan-200" />
            HOME
          </a>
          <a
            href=""
            className="w-full flex items-center justify-center gap-1 p-2 bg-[#121216] rounded-lg hover:text-emerald-300 transition-colors duration-300"
          >
            <InfoIcon className="text-cyan-200" />
            ABOUT
          </a>
          <a
            href=""
            className="w-full flex items-center justify-center gap-1 p-2 bg-[#121216] rounded-lg hover:text-emerald-300 transition-colors duration-300"
          >
            <ContactPhoneIcon className="text-cyan-200" />
            CONTACT
          </a>
          <a
            href=""
            className="w-full flex items-center justify-center gap-1 p-2 bg-[#121216] rounded-lg hover:text-emerald-300 transition-colors duration-300"
          >
            <SupportAgentIcon className="text-cyan-200" />
            AGENT
          </a>
          <a
            href=""
            className="w-full flex items-center justify-center gap-1 p-2 bg-[#121216] rounded-lg hover:text-emerald-300 transition-colors duration-300"
          >
            <AddBoxIcon className="text-cyan-200" />
            SIGN UP
          </a>
          <a
            href="/login"
            className="w-full flex items-center justify-center gap-1 p-2 bg-[#121216] rounded-lg hover:text-emerald-300 transition-colors duration-300"
          >
            <InputIcon className="text-cyan-200" />
            LOGIN
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

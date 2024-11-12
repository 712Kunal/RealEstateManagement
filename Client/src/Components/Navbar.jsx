import { React, useState, useEffect } from "react";
import Sidebar from "./Sidebar.jsx";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const mobileWidth = useMediaQuery("(max-width:768px)");
  const [isMobile, setIsMobile] = useState(mobileWidth);
  const navigate = useNavigate();
  const [userInformation, setUserInformation] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("userData");

    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setUserInformation(parsedData);
      } catch (error) {
        console.error("Error parsing user data:", error);
        setUserInformation(null);
      }
    } else {
      console.log(`Noe data found in the local storage`);
      setUserInformation(null);
    }
  }, []);

  useEffect(() => {
    setIsMobile(mobileWidth);
  }, [mobileWidth]);

  return (
    <>
      <div
        className="w-full overflow-x-hidden fixed top-0 left-0 right-0 z-40 drop-shadow-lg h-auto"
        style={{
          backgroundImage: "url(/src/assets/SVG/navbarWave.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <nav className="w-full flex flex-grow items-center justify-between px-2">
          {/* LOGO */}
          <div className="nav-left flex items-center gap-12 basis-2/3">
            <a href="/" className="flex items-center gap-2 text-white">
              <img src="/src/assets/logo.png" alt="logo" className="w-10" />
              <span className="text-2xl md:hidden lg:block font-courgette">
                REAL_EZY
              </span>
            </a>

            {/* NAVBAR ITEMS */}
            <div className="hidden md:block">
              <ul className="flex items-center justify-around gap-12 text-white text-lg font-sidebar font-side">
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

          <div className="nav-right hidden md:flex items-center justify-end h-full gap-6 basis-2/5">
            {userInformation ? (
              <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-1 shadow-lg border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={
                        userInformation.user.avatar ||
                        "/src/assets/noavatar.png"
                      }
                      alt="avatar"
                      className="w-10 h-10 rounded-full object-cover border-2 border-emerald-400 shadow-md hover:border-emerald-300 transition-colors duration-300"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-white font-semibold text-sm">
                    {userInformation.user.username}
                  </span>
                </div>
                <div className="h-8 w-px bg-white/20"></div>
                <button
                  onClick={() => navigate("/app/profile")}
                  className="relative group px-5 py-2 rounded-xl font-semibold text-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 transition-transform duration-300 group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-white">Profile</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate("/login")}
                  className="relative overflow-hidden px-6 py-2.5 rounded-xl font-semibold text-sm group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-transform duration-300 group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-white">Login</span>
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="relative overflow-hidden px-6 py-2.5 rounded-xl font-semibold text-sm group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 transition-transform duration-300 group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-white">Sign up</span>
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* CONDITIONAL RENDERING */}
      {isMobile ? <Sidebar /> : null}
    </>
  );
}

export default Navbar;

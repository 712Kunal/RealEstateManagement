import { React, useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import InputIcon from "@mui/icons-material/Input";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
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

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest(".sidebar-content")) {
        setMenuOpen(false);
      }
    };
  }, [menuOpen]);

  const getMenuItems = () => {
    const baseItems = [
      { id: "home", icon: HomeIcon, text: "HOME", path: "" },
      { id: "about", icon: InfoIcon, text: "ABOUT", path: "" },
      { id: "contact", icon: ContactPhoneIcon, text: "CONTACT", path: "" },
      { id: "agent", icon: SupportAgentIcon, text: "AGENT", path: "" },
    ];

    if (!userInformation) {
      return [
        ...baseItems,
        { id: "signup", icon: AddBoxIcon, text: "SIGN UP", path: "" },
        { id: "login", icon: InputIcon, text: "LOGIN", path: "/login" },
      ];
    }

    return baseItems;
  };

  const menuItems = getMenuItems();

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        className="fixed right-4 top-2 p-2 text-white bg-gray-900 rounded-full cursor-pointer md:hidden z-[51] shadow-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <MenuOpenIcon className="!text-3xl" />
        ) : (
          <IoMenu className="text-3xl" />
        )}
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`sidebar-content fixed top-0 right-0 h-screen z-50 bg-gradient-to-b from-gray-900 to-gray-800 w-64 transform transition-all duration-300 ease-out shadow-2xl md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Logo Area */}
        <div className="mt-16 mb-8 px-6">
          <div className="h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center gap-2">
            <img src="/src/assets/logo.png" alt="logo" className="w-8" />
            <span className="text-xl text-white md:hidden lg:block font-courgette">
              REAL_EZY
            </span>
          </div>
        </div>

        {/* User Profile Section - Conditionally Rendered */}
        {userInformation && (
          <div className="px-2 mb-6">
            <div className="bg-gray-800/50 rounded-lg p-4 flex items-center gap-3">
              <img
                src={userInformation.user.avatar || "/src/assets/noavatar.png"}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-[1px]"
              />
              <div className="flex-1">
                <p className="text-white font-medium">
                  {userInformation.user.username || "User"}
                </p>
                <p className="text-sm text-gray-400">
                  {userInformation.user.email || ""}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Menu */}
        <nav className="px-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.path}
                className={`group w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300
                  ${
                    activeItem === item.id
                      ? "bg-cyan-500/20 text-cyan-300"
                      : "hover:bg-gray-800 text-gray-300 hover:text-white"
                  }`}
                onClick={() => setActiveItem(item.id)}
              >
                <Icon
                  className={`text-2xl transition-colors duration-300
                  ${
                    activeItem === item.id
                      ? "text-cyan-300"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                />
                <span className="font-medium tracking-wide">{item.text}</span>
              </a>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="p-4 bg-gray-800/50 rounded-lg">
            <p className="text-sm text-gray-400 text-center">
              Need help? Contact support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

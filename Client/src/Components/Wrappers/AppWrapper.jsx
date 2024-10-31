import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar.jsx";

function AppWrapper() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppWrapper;

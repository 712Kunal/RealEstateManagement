import React from "react";
import Button from "@mui/material/Button";
import { IoHome } from "react-icons/io5";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[url('src/assets/SVG/notfoundWave.svg')] bg-cover bg-no-repeat bg-center w-full min-h-screen overflow-x-hidden flex flex-col justify-center items-center">
      <h1 className="z-10 font-bold font-exo text-9xl text-slate-200 tracking-wider">
        404
      </h1>

      <div className="relative -top-10 inset-y-0 z-0">
        <img src="src/assets/not Found.png" alt="not found Page" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-80 h-80 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-25 animate-ping" />
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center -mt-5 gap-4">
        <h2 className="text-4xl font-semibold text-slate-300">
          Property Not Found
        </h2>
        <p className="text-slate-500 max-w-md text-center">
          The property you're looking for seems to have moved to a different
          location or doesn't exist anymore.
        </p>
        <div className="w-3/4 flex flex-col items-center justify-center gap-5 mb-10">
          <Button
            className="!w-full !text-2xl !rounded-lg !tracking-wider !p-3 !text-white !bg-purple-600 !hover:bg-purple-800 !transition !duration-300"
            variant="contained"
            type="submit"
            onClick={() => navigate("/")}
          >
            <IoHome className="text-white text-2xl mr-2" />
            BACK TO HOME
          </Button>

          <Button
            className="!w-full !text-2xl !rounded-lg !tracking-wider !p-3 !text-white !bg-slate-800 !hover:bg-purple-800 !transition !duration-300"
            variant="contained"
            type="submit"
          >
            BROWSE PROPERTIES
            <FaArrowAltCircleRight className="text-white text-2xl ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;

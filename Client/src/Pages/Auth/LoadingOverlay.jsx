import React from "react";
import { CircularProgress } from "@mui/material";

function LoadingOverlay({ message }) {
  return (
    <div className="LoadingOverlay fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg shadow-xl flex flex-col items-center">
        <CircularProgress className="text-violet-500" />
        <p className="text-xl font-bold text-white">{message}</p>
      </div>
    </div>
  );
}

export default LoadingOverlay;

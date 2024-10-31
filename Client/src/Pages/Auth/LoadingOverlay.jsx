import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export function LoadingOverlay({ message }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(4px)",
        zIndex: 9999, // Ensure this is higher than MUI Dialog's z-index
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="bg-[#00041c] p-6 rounded-lg shadow-xl flex flex-col items-center gap-4 w-1/2"
        style={{
          position: "relative",
          zIndex: 10000, // Even higher z-index for the content
        }}
      >
        <CircularProgress className="text-violet-500" />
        <p className="text-gray-200 text-lg">{message}</p>
      </div>
    </div>
  );
}

export default LoadingOverlay;

import { React, useEffect } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogTitle, Typography, DialogContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

function TwofaVerifyPopup({ open, onClose }) {
  const navigate = useNavigate();

  // SET THE TIMEOUT FOR THE POPUP TO CLOSE
  const delay = 3000;

  useEffect(() => {
    if (open) {
      // SET A TIMEOUT TO CLOSE THE POPUP AFTER A SPECIFIED TIME
      const timer = setTimeout(() => {
        // CLOSE THE POPUP
        onClose();
        // NAVIGATE TO LANDING PAGE AFTER CLOSING THE POPUP
        navigate("/");
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [open, onClose, navigate, delay]);

  const svgVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5, // Increased from 0.5 to 1.5 seconds
        ease: "easeOut",
      },
    },
  };

  const pathVariants = {
    hidden: { pathLength: 0, fill: "none" },
    visible: {
      pathLength: 1,
      fill: "rgba(34, 197, 94, 1)", // Tailwind's green-500
      transition: {
        duration: 2, // Increased from 1 to 2 seconds
        ease: "easeInOut",
        fill: { delay: 1.5, duration: 1 }, // Increased delay and duration
      },
    },
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="!text-white !shadow-md !shadow-cyan-500"
    >
      <DialogContent className="!bg-[#0f172a] bg-[url('src/assets/SVG/popup.svg')] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center">
        <DialogTitle className="!text-3xl !text-white !font-bold mb-4">
          Authentication Successful
        </DialogTitle>
        <Typography
          variant="h6"
          component="h2"
          className="!text-slate-300 mb-6"
        >
          You have successfully verified your identity.
        </Typography>

        <motion.div
          className="w-20 h-20 mb-6"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-full h-full"
          >
            <motion.path
              d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        </motion.div>

        <Typography
          variant="body1"
          component="p"
          className="!text-slate-400 !font-exo !tracking-wide text-center"
        >
          Two-factor authentication complete. Your account is now secured with
          an additional layer of protection.
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

export default TwofaVerifyPopup;

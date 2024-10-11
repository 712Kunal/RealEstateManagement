import React from "react";
import { motion } from "framer-motion";
import { Dialog, DialogTitle, Typography, DialogContent } from "@mui/material";

function TwofaVerifyPopup({ open, onClose }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        className="!text-white !shadow-md !shadow-cyan-500"
      >
        <DialogContent className="!bg-[#0f172a] bg-[url('src/assets/SVG/popup.svg')] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center">
          <DialogTitle className="!text-3xl !text-white !font-old">
            Authentication Successful✅
          </DialogTitle>
          <Typography variant="h6" component="h2" className="!text-slate-300">
            You have successfully verified your identity.
          </Typography>

          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1.5,
            }}
            className="flex justify-center items-center"
          >
            <motion.svg
              width="500px"
              height="500px"
              viewBox="-16.7 -16.7 200.36 200.36"
              xmlns="http://www.w3.org/2000/svg"
              className="w-1/4 h-1/4"
            >
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <motion.path
                  d="M71.791,96.415h-0.179l-6.848-7.849c3.31,1.188,6.759,1.906,10.336,1.906c3.581,0,7.024-0.706,10.328-1.9l-6.848,7.843 h-0.167l16.779,40.578l15.332-20.361l17.001,12.787l10.669-16.027c-10.078-12.787-25.952-24.198-44.658-28.938 c13.518-9.097,22.834-27.033,22.834-43.181C116.369,18.478,97.883,0,75.1,0S33.837,18.478,33.837,41.272 c0,16.148,9.307,34.084,22.828,43.181c-32.324,8.199-56.282,36.258-56.282,57.059c0,12.288,37.351,18.426,74.705,18.413 l-20.919-20.91L71.791,96.415z"
                  fill="#4ade80"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.path
                  d="M75.115,159.938c10.924-0.013,21.848-0.523,31.828-1.583l-17.269-12.982L75.115,159.938z"
                  fill="#4ade80"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
                />
                <motion.polygon
                  points="152.605,108.63 129.826,142.845 112.381,129.724 102.279,143.138 133.967,166.964 166.58,117.94"
                  fill="#4ade80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                />
              </motion.g>
            </motion.svg>
          </motion.div>

          <Typography
            variant="body1"
            component="p"
            className="!text-slate-400 !font-exo !tracking-wide"
          >
            Two factor authentication complete, Your account is now secured with
            an additional layer of protection.
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default TwofaVerifyPopup;

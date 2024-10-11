import React from "react";
import {
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  TextField,
} from "@mui/material";

function TwofaVerifyPopup({ open, onClose }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        className="!text-white !shadow-md !shadow-cyan-500"
      >
        <DialogContent className="!bg-[#0f172a] flex flex-col items-center justify-center">
          <DialogTitle className="!text-3xl !text-white !font-old">
            Authentication Successful✅
          </DialogTitle>
          <Typography variant="h6" component="h2" className="!text-slate-300">
            You have successfully verified your identity.
          </Typography>
          <img
            src="src/assets/SVG/2faVerified.svg"
            alt="2fa verify"
            className="w-1/4 h-1/4"
          />
          <Typography
            variant="body1"
            component="p"
            className="!text-slate-400 !font-exo !tracking-wide"
          >
            Two factor authentication complete,Your account is now secured with
            an additional layer of protection.
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default TwofaVerifyPopup;

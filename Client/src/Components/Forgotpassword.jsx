import React from "react";
import { Dialog, DialogTitle, DialogContent, TextField } from "@mui/material";
import Button from "@mui/material/Button";

function Forgotpassword({ open, onClose }) {
  console.log("Forgot password clicked");
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        disableEscapeKeyDown
        PaperProps={{
          className: "!bg-[#18181b] !text-white !shadow-md !shadow-cyan-500",
        }}
      >
        <div className="bg-[url('src/assets/SVG/popup.svg')] bg-cover bg-no-repeat bg-center">
          <DialogTitle className="!font-old !text-4xl !font-normal">
            Forgot Password
          </DialogTitle>
          <DialogContent>
            <p className="!font-exo !tracking-wide !text-xl !font-extralight !mt-10">
              Enter your email address below to reset your password.
            </p>

            <TextField
              type="email"
              placeholder="EMAIL"
              name="email"
              variant="outlined"
              className="!w-full !h-16 !mt-5 !text-xl !text-white !border-[2px] !border-cyan-300 !shadow-md !shadow-slate-500"
              InputProps={{
                className:
                  "!border-[2px] !border-cyan-300 !shadow-md !shadow-slate-500",
              }}
            />
            <Button
              type="submit"
              variant="contained"
              className="!w-full !mt-5 tracking-wide !font-sans !text-xl text-white !p-2 rounded-lg"
            >
              Send Reset Link
            </Button>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
}

export default Forgotpassword;

import { React, useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import Button from "@mui/material/Button";
import LockOpenIcon from "@mui/icons-material/LockOpen";

function ForgotPassInput({ open, onClose }) {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        disableEscapeKeyDown
        PaperProps={{
          className:
            "!bg-[#18181b] !text-white !shadow-md !shadow-cyan-500 !w-full",
        }}
      >
        <div className="bg-[url('src/assets/SVG/popup.svg')] bg-cover bg-no-repeat bg-center">
          <form onSubmit={handleSubmit}>
            <DialogTitle className="!flex !items-center !gap-1 !font-old !text-4xl !font-normal">
              <LockOpenIcon className="!text-4xl !text-center" />
              Forgot Password
            </DialogTitle>
            <DialogContent>
              <p className="!font-exo !tracking-wide !text-xl !font-extralight !mt-10">
                Enter your email address and we'll send you a OTP to reset your
                password.
              </p>

              <div className="flex flex-col w-full mt-10">
                <p className="font-old text-xl font-extralight mb-1">
                  Email Address :
                </p>
                <input
                  className="w-full text-gray-100 rounded-lg px-2 py-1 bg-gray-800/50 border border-gray-700/50 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition duration-300 placeholder:text-gray-400 placeholder:tracking-widest text-xl font-medium"
                  type="email"
                  placeholder="EMAIL"
                  name="email"
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  title="Please enter a valid email address"
                />
              </div>

              {error && (
                <p className="text-red-400 text-lg text-center mt-4">{error}</p>
              )}
              
              <Button
                type="submit"
                variant="contained"
                className="!w-full !mt-5 tracking-wide !font-sans !text-xl text-white !p-2 rounded-lg"
              >
                NEXT
              </Button>
            </DialogContent>
          </form>
        </div>
      </Dialog>
    </>
  );
}

export default ForgotPassInput;

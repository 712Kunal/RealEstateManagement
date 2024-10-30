import { React, useState } from "react";
import TwoFactorAuth from "./TwoFactorAuth.jsx";
import apiRequest from "../lib/apiRequest.js";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import Button from "@mui/material/Button";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Forgotpassword from "./Forgotpassword.jsx";

function ForgotPassInput({ open, onClose }) {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [showMailVerify, setShowMailVerify] = useState(false);
  const [userId, setUserId] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [showForgotPass, setShowForgotPass] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.target);
    const email = formData.get("email");

    if (email !== "") {
      setError("");
      setEmail(email);

      try {
        const findUser = await apiRequest.post("/auth/ForgotPass", {
          email,
        });

        // FIND THE USER ID TO VERIFY THE OTP
        setUserId(findUser.data.userId);
        setOtpSent(findUser.data.message === "OTP sent successfully!!");

        setShowMailVerify(true);
      } catch (error) {
        setError(error.response.data.error);
      }
    } else {
      setError("Please enter a valid email address");
    }
  };

  // AFTER THE SUCCESSFULL FORGOT PASSWORD PROCESS THIS METHOD RUNS
  const handleResetSuccess = () => {
    setShowForgotPass(false);
    onClose();
  };

  const handlePassOTP = async (otpCode) => {
    try {
      if (!userId) {
        throw new Error("User ID not found");
      }

      if (!otpSent) {
        throw new Error("OTP not sent successfully");
      }

      const verifyOTPResponse = await apiRequest.post(
        "/auth/getOTPVerification",
        {
          userId: userId,
          otp: otpCode,
        }
      );

      setError("");
      setShowMailVerify(false);
      setUserId(null);
      setOtpSent(false);
      setShowForgotPass(true);
    } catch (error) {
      throw new Error(error.response.data.error);
    }
    setShowMailVerify(false);
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

              <Button
                type="submit"
                variant="contained"
                className="!w-full !mt-5 tracking-wide !font-sans !text-xl text-white !p-2 rounded-lg"
              >
                NEXT
              </Button>

              {error ? (
                <p className="text-red-400 text-center">{error}</p>
              ) : null}
            </DialogContent>
          </form>
        </div>
      </Dialog>

      {showMailVerify && (
        <div>
          <TwoFactorAuth
            open={showMailVerify}
            onVerify={handlePassOTP}
            email={email}
            onClose={() => setShowMailVerify(false)}
          />
        </div>
      )}

      {showForgotPass ? (
        <div>
          <Forgotpassword
            open={showForgotPass}
            onClose={() => setShowForgotPass(false)}
            email={email}
            onResetSuccess={handleResetSuccess}
          />
        </div>
      ) : null}
    </>
  );
}

export default ForgotPassInput;

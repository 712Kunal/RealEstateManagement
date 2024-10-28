import { React, useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { Dialog, DialogTitle, DialogContent, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LockOpenIcon from "@mui/icons-material/LockOpen";


function TwoFactorAuth({ open, onVerify, email, onClose }) {
  const [code, setCode] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [showCloseConfirm, setShowCloseConfirm] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (open && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [open]);

  const InputHandle = (value, index) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value !== "" && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0 && code[index] === "") {
      inputRefs.current[index - 1].focus();
    }
    if (event.key === " " && index < 3 && code[index] !== "") {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleVerify = async () => {
    const fullCode = code.join("");
    try {
      if (fullCode.length === 4) {
        await onVerify(fullCode);
      }
      setCode(["", "", "", ""]);
    } catch (error) {
      setError("Please enter the valid 4 digit code");
      setCode(["", "", "", ""]);
    }
  };

  const confirmClose = () => {
    setShowCloseConfirm(false);
    onClose();
  };

  const cancelClose = () => {
    setShowCloseConfirm(false);
  };

  const handleClose = () => {
    setShowCloseConfirm(true);
  };

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
        {showCloseConfirm ? (
          <DialogContent>
            <p className="text-center mb-4 text-xl">
              Are you sure you want to cancel the verification process?
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                variant="link"
                className="!p-2 !bg-red-500"
                onClick={confirmClose}
              >
                Yes, Cancel
              </Button>

              <Button
                variant="link"
                className="!p-2 !bg-green-700"
                onClick={cancelClose}
              >
                No, Continue
              </Button>
            </div>
          </DialogContent>
        ) : (
          <div className="bg-[url('src/assets/SVG/popup.svg')] bg-cover bg-no-repeat bg-center">
            <CloseIcon
              className="text-red-400 mr-1 mt-1 self-end !text-3xl !cursor-pointer"
              onClick={handleClose}
            />
            {email ? (
              <DialogTitle className="!flex !items-center !gap-1 !font-old !text-4xl !font-normal">
                <LockOpenIcon className="!text-4xl !text-center" />
                Forgot Password
              </DialogTitle>
            ) : (
              <DialogTitle className="!font-old !text-4xl !font-normal">
                Two-Factor Authentication
              </DialogTitle>
            )}
            <DialogContent>
              <p className="!font-exo !tracking-wide !text-xl !font-extralight !mt-10">
                We've sent a 4-digit code to your email. Please enter it below
                to verify your identity.
              </p>

              <div className="flex justify-center space-x-8 mt-5">
                {code.map((digit, index) => (
                  <TextField
                    key={index}
                    type="text"
                    inputMode="numeric"
                    value={digit}
                    inputRef={(el) => (inputRefs.current[index] = el)}
                    variant="outlined"
                    className="!w-16 !h-16"
                    inputProps={{
                      className: "!text-center !text-white !text-xl",
                    }}
                    InputProps={{
                      className:
                        "!border-[2px] !border-cyan-300 !shadow-md !shadow-slate-500",
                    }}
                    onChange={(e) => InputHandle(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                  />
                ))}
              </div>
              <Button
                type="submit"
                variant="contained"
                className="!w-full !mt-5 tracking-wide !font-sans !text-xl text-white !p-2 rounded-lg"
                onClick={handleVerify}
              >
                Verify
              </Button>
              {error ? (
                <p className="text-red-400 text-center">{error}</p>
              ) : null}
            </DialogContent>
          </div>
        )}
      </Dialog>
    </>
  );
}

export default TwoFactorAuth;

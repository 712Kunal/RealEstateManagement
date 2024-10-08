import { React, useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { Dialog, DialogTitle, DialogContent, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function TwoFactorAuth({ open, onVerify, onClose }) {
  console.log(`kdjfksdkfjkf`);
  
  const [code, setCode] = useState(["", "", "", ""]);
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

  const handleVerify = () => {
    const fullCode = code.join("");
    try {
      if (fullCode.length === 4) {
        onVerify(fullCode);
      }
    } catch (error) {
      console.log(`Please enter the 4 digit code`);
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
        <>
          <CloseIcon
            className="text-red-400 mr-1 mt-1 self-end !text-3xl !cursor-pointer"
            onClick={handleClose}
          />
          <DialogTitle className="!font-old !text-4xl !font-normal">
            Two-Factor Authentication
          </DialogTitle>
          <DialogContent>
            <p className="!font-exo !tracking-wide !text-xl !font-extralight">
              We've sent a 4-digit code to your email. Please enter it below to
              verify your identity.
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
            <p className="text-[0.9rem] text-center tracking-widest mt-4 text-red-200 text-muted-foreground">
              Didn't receive the code?{" "}
              <Button variant="link" className="!p-2 !bg-green-700">
                Re-send
              </Button>
            </p>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
}

export default TwoFactorAuth;

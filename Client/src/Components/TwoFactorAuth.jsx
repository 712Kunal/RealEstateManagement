import { React, useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { Dialog, DialogTitle, DialogContent, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function TwoFactorAuth({ open, onVerify, onClose }) {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRef = useRef([]);

  useEffect(() => {
    if (open && inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, [open]);

  const InputHandle = (value, index) => {
    if (digit.length <= 1) {
      // IF THE CODE IS ['1', '2', '', ''],
      // THEN THE newCode WILL ALSO BE ['1', '2', '', '', ] ,THE COPY OF code ARRAY IS STORED IN THE newCode
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode); // UPDATE THE CODE ARRAY

      if (value !== "" && index < 4) {
        inputRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, event, value) => {
    if (event.key === "Backspace" && index > 0 && code[index] === "") {
      inputRef.current[index - 1].focus();
    }
    if (event.key === "space" && 0 < index < 4 && code[index] === value) {
      inputRef.current[index + 1].focus();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        className: "!bg-[#18181b] !text-white !shadow-md !shadow-cyan-500",
      }}
    >
      <CloseIcon className="text-red-400 mr-1 mt-1 self-end !text-3xl" />
      <DialogTitle className="!font-old !text-4xl !font-normal">
        Two-Factor Authentication
      </DialogTitle>
      <DialogContent>
        <p className="!font-exo !tracking-wide !text-xl !font-extralight">
          We've sent a 4-digit code to your email. Please enter it below to
          verify your identity.
        </p>

        <div className="flex justify-center space-x-8 mt-5">
          {code.map((digit, index) => {
            return (
              <TextField
                type="text"
                inputMode="Numeric"
                key={index}
                value={digit}
                ref={(el) => {
                  inputRef.current[index] = el;
                }}
                variant="outlined"
                className="!w-16 !h-16"
                inputProps={{
                  maxLength: 1,
                  className: "!text-center !text-white !text-xl",
                }}
                InputProps={{
                  className:
                    "!border-[2px] !border-cyan-300 !shadow-md !shadow-slate-500",
                }}
                onChange={(e) => {
                  InputHandle(e.target.value, index);
                }}
                onKeyDown={(e) => {
                  handleKeyDown(index, e, digit);
                }}
              />
            );
          })}
        </div>
        <Button
          type="submit"
          variant="contained"
          className="!w-full !mt-5 tracking-wide !font-sans !text-xl text-white !p-2 rounded-lg"
        >
          Verify
        </Button>
        <p className="text-[0.9rem] text-center tracking-widest mt-4 text-red-200 text-muted-foreground">
          Didn't received the code ?{"       "}
          <Button variant="link" className="!p-2 !bg-green-700">
            Re-send
          </Button>
        </p>
      </DialogContent>
    </Dialog>
  );
}

export default TwoFactorAuth;

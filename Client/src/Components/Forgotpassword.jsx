import { React, useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import Button from "@mui/material/Button";
import LockOpenIcon from "@mui/icons-material/LockOpen";

function Forgotpassword({ open, onClose, email }) {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newPassword = formData.get("new password");
    const confirmPassword = formData.get("confirm password");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
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
              Reset Account Password
            </DialogTitle>
            <DialogContent>
              <div className="flex flex-col w-full mt-10">
                <p className="font-exo text-xl font-extralight mb-1">
                  New Password :
                </p>
                <input
                  className="w-full text-gray-100 rounded-lg px-2 py-1 bg-gray-800/50 border border-gray-700/50 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition duration-300 placeholder:text-gray-400 placeholder:tracking-widest text-xl font-medium"
                  type="password"
                  placeholder="PASSWORD"
                  name="new password"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  title="Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)"
                />
              </div>

              <div className="flex flex-col w-full mt-5">
                <p className="font-exo text-xl font-extralight mb-1">
                  Confirm Password :
                </p>
                <input
                  className="w-full text-gray-100 rounded-lg px-2 py-1 bg-gray-800/50 border border-gray-700/50 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition duration-300 placeholder:text-gray-400 placeholder:tracking-widest text-xl font-medium"
                  type="password"
                  placeholder="PASSWORD"
                  name="confirm password"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  title="Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)"
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
                RESET MY PASSWORD
              </Button>
            </DialogContent>
          </form>
        </div>
      </Dialog>
    </>
  );
}

export default Forgotpassword;

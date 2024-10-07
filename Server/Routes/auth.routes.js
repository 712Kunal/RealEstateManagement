import express from "express";
import validateInput from "../Services/InputValidate.service.js";
import userMiddleware from "../MiddleWares/auth.middleware.js";
import {
  google,
  login,
  logout,
  signup,
  loginSchema,
  signupSchema,
  verifyEnteredOTP,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", validateInput(signupSchema), signup);

router.post("/login", validateInput(loginSchema), login);

router.post("/logout", userMiddleware, logout);

router.post("/google", google);

router.post("/getOTPVerification", verifyEnteredOTP);

export default router;

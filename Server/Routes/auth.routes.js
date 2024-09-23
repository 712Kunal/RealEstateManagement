import express from "express";
import {
  google,
  login,
  logout,
  signup,
  loginSchema,
  signupSchema,
  validateInput,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", validateInput(signupSchema), signup);

router.post("/login", validateInput(loginSchema), login);

router.post("/logout", logout);

router.post("/google", google);

export default router;

import express from "express";
import { shouldBeLoggedIn, shouldBeAdmin } from "../controllers/test.controller.js";
import userMiddleware from "../MiddleWares/auth.middleware.js";

const router = express.Router();

router.get("/should-be-logged-in",userMiddleware, shouldBeLoggedIn);
router.get("/should-be-admin", shouldBeAdmin);

export default router;

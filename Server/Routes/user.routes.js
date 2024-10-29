import express from "express";
const router = express.Router();
import userMiddleware from "../MiddleWares/auth.middleware.js";
import {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  AllprofilePosts,
  UpdateForgettedPassword,
} from "../controllers/user.controller.js";

router.get("/", getAllUsers);
router.get("/profilePosts", userMiddleware, AllprofilePosts);
router.put("/updateForgettedPassword", UpdateForgettedPassword);
router.get("/:id", userMiddleware, getUserById);
router.put("/:id", userMiddleware, updateUserById);
router.delete("/:id", userMiddleware, deleteUserById);
export default router;

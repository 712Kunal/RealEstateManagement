import express from "express";
import usermiddleware from "../MiddleWares/auth.middleware.js";
import {
  getAllPosts,
  getPostById,
  addPostById,
  updatePostById,
  deletePostById,
  savePost,
} from "../controllers/post.controller.js";

const router = express.Router();

// FETCHING ALL THE POSTS
router.get("/Posts", getAllPosts);  

// FETCHING THE SINGLE USER POSTS
router.get("/fetchingPost/:id", usermiddleware, getPostById);

// POSTING THE SINGLE USER POST
router.post("/addingPost/:id", usermiddleware, addPostById);

// UPDATING THE SINGLE USER POST
router.put("/updatingPost/:id", usermiddleware, updatePostById);

// DELETING THE SINGLE USER POST
router.delete("/deletingPost/:id", usermiddleware, deletePostById);

// SAVING THE POSTS
router.post("/save", usermiddleware, savePost);

export default router;

import express from "express";

const router = express.Router();

// Posting the post
router.post("/test", (req, res) => {
  console.log("Router works");
});

//Fetching the post
router.get("/test", (req, res) => {
  console.log("Router works");
});

//Updating the post
router.put("/test", (req, res) => {
  console.log("Router works");
});

//deleting the post
router.delete("/test", (req, res) => {
  console.log("Router works");
});

export default router;

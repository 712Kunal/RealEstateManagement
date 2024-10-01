import prisma from "../lib/prisma.js";

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await prisma.post.findMany();

    if (allPosts) {
      res.status(200).json({
        message: "All posts fetched successfully!!",
        AllPosts: allPosts,
      });
    }
  } catch (error) {
    console.error(`getAllPosts error => ${error}`);
    res.status(500).json({ error: "Failed to get all posts!!" });
  }
};

const getPostById = async (req, res) => {
  try {
    const post_id = req.params;

    const singlePost = await prisma.post.findUnique({
      where: {
        id: post_id,
      },
    });

    if (singlePost) {
      res.status(200).json({
        message: "Single post fetched successfully!!",
        SinglePost: singlePost,
      });
    }
  } catch (error) {
    console.error(`getPostById error => ${error}`);
    res.status(500).json({ error: "Failed to get single post!!" });
  }
};

const addPostById = async (req, res) => {
  try {
    const propertyData = req.body;
    const tokenUserId = req.user.id;
    const user_id = req.params;
    console.log(tokenUserId);
    
    

    if (tokenUserId !== user_id) {
      return res.status(403).json({
        message: "User is not authorized to add the post",
        username: req.user.username,
        email: req.user.email,
      });
    }

    const newPost = await prisma.post.create({
      data: {
        ...propertyData,
        userId: tokenUserId,
      },
    });

    if (newPost) {
      return res.status(200).json({
        message: "User added the post successfully!!",
        username: req.user.username,
        email: req.user.email,
        Created_Post: newPost,
      });
    }
  } catch (error) {
    console.error(`addPostById error => ${error}`);
    res.status(500).json({ error: "Failed to add single post!!" });
  }
};

const updatePostById = async (req, res) => {
  try {
  } catch (error) {
    console.error(`updatePostById error => ${error}`);
    res.status(500).json({ error: "Failed to update single post!!" });
  }
};

const deletePostById = async (req, res) => {
  try {
    const deletedPostId = req.params;
    const tokenUserId = req.user.id;

    const findPostToDelete = await prisma.post.findUnique({
      where: {
        id: deletedPostId,
      },
    });

    if (tokenUserId !== findPostToDelete.userId) {
      return res
        .status(403)
        .json({ message: "User is not authorized to delete this post" });
    }

    const deletePost = await prisma.post.delete({
      where: {
        id: deletedPostId,
      },
    });

    if (deletePost) {
      res.status(200).json({
        message: "User deleted the post successfully!!",
        username: req.user.username,
        email: req.user.email,
        Deleted_Post: deletePost,
      });
    }
  } catch (error) {
    console.error(`deletePostById error => ${error}`);
    res.status(500).json({ error: "Failed to delete single post!!" });
  }
};

export {
  getAllPosts,
  getPostById,
  addPostById,
  updatePostById,
  deletePostById,
};

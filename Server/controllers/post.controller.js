import prisma from "../lib/prisma.js";

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await prisma.post.findMany();

    if (allPosts) {
      res.status(200).json({
        message: "All posts fetched successfully",
        AllPosts: allPosts,
      });
    }
  } catch (error) {
    console.error(`getAllPosts error => ${error}`);
    res.status(500).json({ error: "Failed to get all posts" });
  }
};

const getPostById = async (req, res) => {
  try {
    const post_id = req.params.id;
    const tokenUserId = req.user.id;

    const singlePost = await prisma.post.findUnique({
      where: {
        id: post_id,
      },
      include: {
        postDetail: true,
        relatedUser: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });

    // CHECK IF THE USER SAVED THAT PERTICULAR POST OR NOT
    const savedPost = await prisma.savedPost.findUnique({
      where: {
        userId_postId: {
          userId: tokenUserId,
          postId: post_id,
        },
      },
    });

    if (singlePost) {
      res.status(200).json({
        message: "Single post fetched successfully",
        SinglePost: singlePost,
        isSaved: savedPost ? true : false,
      });
    }
  } catch (error) {
    console.error(`getPostById error => ${error}`);
    res.status(500).json({ error: "Failed to get single post" });
  }
};

const addPostById = async (req, res) => {
  try {
    const propertyData = req.body;
    const tokenUserId = req.user.id;
    const user_id = req.params.id;

    if (tokenUserId !== user_id) {
      return res.status(403).json({
        message: "User is not authorized to add the post",
        username: req.user.username,
        email: req.user.email,
      });
    }

    const newPost = await prisma.post.create({
      data: {
        ...propertyData.postData,
        userId: tokenUserId,
        postDetail: {
          //This is a nested create operation in Prisma,The create keyword tells Prisma to create a new postDetail record.
          create: propertyData.postDetail,
        },
      },
    });

    if (newPost) {
      return res.status(200).json({
        message: "User added the post successfully",
        username: req.user.username,
        email: req.user.email,
        Created_Post: newPost,
      });
    }
  } catch (error) {
    console.error(`addPostById error => ${error}`);
    res.status(500).json({ error: "Failed to add single post" });
  }
};

const updatePostById = async (req, res) => {
  try {
  } catch (error) {
    console.error(`updatePostById error => ${error}`);
    res.status(500).json({ error: "Failed to update single post" });
  }
};

const deletePostById = async (req, res) => {
  try {
    const deletedPostId = req.params.id;
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
        message: "User deleted the post successfully",
        username: req.user.username,
        email: req.user.email,
        Deleted_Post: deletePost,
      });
    }
  } catch (error) {
    console.error(`deletePostById error => ${error}`);
    res.status(500).json({ error: "Failed to delete single post" });
  }
};

const savePost = async (req, res) => {
  try {
    const tokenUserId = req.user.id;
    const postId = req.body.postId;

    // CHECK IF ANY POST IS SAVED BY THE USER
    const savedPost = await prisma.savedPost.findUnique({
      where: {
        userId_postId: {
          userId: tokenUserId,
          postId: postId,
        },
      },
    });

    // IF POST EXIST, THEN USER CAN DELETE THE POST AND IF NOT, USER CAN CREATE THE POST
    if (savedPost) {
      const unsavePost = await prisma.savedPost.delete({
        where: {
          id: savedPost.id,
        },
      });
      if (unsavePost) {
        res
          .status(200)
          .json({ message: "User unsaved the post successfully" });
      }
    } else {
      const savePost = await prisma.savedPost.create({
        where: {
          userId_postId: {
            userId: tokenUserId,
            postId: postId,
          },
        },
      });
      if (savePost) {
        res.status(200).json({ message: "User saved the post successfully" });
      }
    }
  } catch (error) {
    console.error(`SavePost error => ${error}`);
    res.status(500).json({ error: "Failed to save the post" });
  }
};

export {
  getAllPosts,
  getPostById,
  addPostById,
  updatePostById,
  deletePostById,
  savePost,
};

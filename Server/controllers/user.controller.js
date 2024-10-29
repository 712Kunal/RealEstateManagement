import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

const getAllUsers = async (req, res) => {
  try {
    const All_Users = await prisma.user.findMany();

    if (All_Users) {
      res.status(200).json({
        message: "All users fetched successfully!!",
        All_Users: All_Users,
      });
    }
  } catch (error) {
    console.error(`getAllUsers error => ${error}`);
    res.status(500).json({ error: "Failed to get all users!!" });
  }
};

const getUserById = async (req, res) => {
  try {
    const user_id = req.params.id;

    if (!user_id) {
      return res.status(400).json({ error: "Missing required fields!!" });
    }
    const User = await prisma.user.findUnique({
      where: { id: user_id },
    });

    if (User) {
      res.status(200).json({
        message: "User fetched successfully!!",
        User: User,
      });
    }
  } catch (error) {
    console.error(`getUser error => ${error}`);
    res.status(500).json({ error: "Failed to get user!!" });
  }
};

const updateUserById = async (req, res) => {
  try {
    const user_id = req.params.id;
    const token_id = req.user.id;

    const { password, avatar, ...otherInputs } = req.body;

    if (user_id !== token_id) {
      return res.status(403).json({
        message: "User is not authorized to update",
        username: req.user.username,
        email: req.user.email,
      });
    }

    if (!user_id || !otherInputs) {
      return res.status(400).json({ error: "Missing required fields!!" });
    }

    let passwordToUpdate = null;
    if (password) {
      passwordToUpdate = await bcrypt.hash(password, 10);
    }

    // UPDATE THE USER
    const updatedUser = await prisma.user.update({
      where: {
        id: user_id,
      },
      data: {
        ...otherInputs,
        ...(passwordToUpdate && { password: passwordToUpdate }),
        ...(avatar && { avatar }),
      },
    });

    if (updatedUser) {
      res.status(200).json({
        message: "User updated successfully!!",
        updatedUser: updatedUser,
      });
    }
  } catch (error) {
    console.error(`UpdateUser error => ${error}`);
    res.status(500).json({ error: "Failed to update user!!" });
  }
};

const UpdateForgettedPassword = async (req, res) => {  
  const { email, newPassword } = req.body;
  if (!email || !newPassword) {
    return res.status(400).json({ error: "Missing required fields!" });
  }

  try {
    // FIND USER BY EMAIL
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }

    //  HASH THE PASSWORD
    let passwordToUpdate = null;
    if (newPassword) {
      passwordToUpdate = await bcrypt.hash(newPassword, 10);
    }

    // UPDATE THE PASSWORD
    const updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        ...(passwordToUpdate && { password: passwordToUpdate }),
      },
    });

    if (updatedUser) {
      res.status(200).json({
        message: "User password updated successfully!!",
        updatedUser: {
          id: updatedUser.id,
          email: updatedUser.email,
          username: updatedUser.username,
        },
      });
    }
  } catch (error) {
    console.error(`Forgot password error => ${error}`);
    res.status(500).json({ error: "Failed to update user password!!" });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const user_id = req.params.id;
    const token_id = req.user.id;

    if (user_id !== token_id) {
      res.status(403).json({
        message: "User is not authorized to delete",
        username: req.user.username,
        email: req.user.email,
      });
    }

    if (!user_id) {
      return res.status(400).json({ error: "Missing required fields!!" });
    }

    //FIRST DELETET THE RELATED ROCORDS (OTP VERIFICATION)
    const deletedUserOTP = await prisma.userOTPVerification.deleteMany({
      where: {
        userId: user_id,
      },
    });

    //DELETE THE USER
    const deletedUser = await prisma.user.delete({
      where: {
        id: user_id,
      },
    });

    if (deletedUser) {
      res.status(200).json({
        message: "User deleted successfully!!",
        deletedUser: deletedUser,
      });
    }
  } catch (error) {
    console.error(`DeleteUser error => ${error}`);
    res.status(500).json({ error: "Failed to delete user!!" });
  }
};

const AllprofilePosts = async (req, res) => {
  try {
    const tokenUserId = req.user.id;

    // FETCH ALL THE POSTS WHICH ARE UPLOADED BY THE USER
    const userProfilePosts = await prisma.post.findMany({
      where: {
        userId: tokenUserId,
      },
    });

    // FETCHING ALL THE SAVED POSTS WHICH ARE SAVED BY THE USER
    const userSavedPosts = await prisma.savedPost.findMany({
      where: {
        userId: tokenUserId,
      },
      include: {
        relatedPost: true,
      },
    });

    if (userProfilePosts || userSavedPosts) {
      res.status(200).json({
        message:
          "Profile posts and saved posts on profile fetched successfully!",
        user_Profile_Posts: userProfilePosts,
        Saved_Profile_Posts: userSavedPosts,
      });
    }
  } catch (error) {
    console.error(`All profile posts error => ${error}`);
    res.status(500).json({ error: "Failed to fetch all the profile posts!!" });
  }
};
export {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  AllprofilePosts,
  UpdateForgettedPassword,
};

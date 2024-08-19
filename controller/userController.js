import User from "../models/userModel.js";

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    const usersCount = await User.countDocuments();
    res.set("Content-Range", `users 0-${users.length}/${usersCount}`);
    return res.status(200).json(users);
  } catch (err) {
    console.error("Internal server error 🔴", err);
    res.status(500).json({ error: `${err.message} 🔴` });
  }
};

// const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     return res.status(200).json(users);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

const getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const userById = await User.findById(userId);
    if (!userById) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(userById);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getUserByToken = async (req, res) => {
  const { token } = req.body;
  console.log(token);
  try {
    const userByToken = await User.findOne({ token }).select(
      "-password -isAdmin"
    );
    if (!userByToken) {
      return res.status(400).json({ error: "No user found" });
    }
    return res.status(200).json(userByToken);
  } catch (err) {
    console.error("Internal server error 🔴", err);
    res.status(500).json({ error: `${err.message} 🔴` });
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateUserFavorites = async (req, res) => {
  const { userId } = req.params;
  const { favorites } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { favorites },
      { new: true }
    );
    return res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getUserFavorites = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId).populate("favorites");
    console.log("hello", user);
    return res.status(200).json(user.favorites);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export {
  getUsers,
  getUserById,
  getUserByToken,
  deleteUser,
  updateUserFavorites,
  getUserFavorites,
};

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

export { getUsers, getUserById };

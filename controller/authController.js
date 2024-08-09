import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // We check in our database if we have an email that match the req.body.email, the one provided by the user
    const verification = await User.findOne({ email, username });
    if (verification) {
      return res.status(404).json({ error: "Email already taken" });
    }

    const salt = await bcrypt.genSaltSync(10);

    const hashedPassword = await bcrypt.hashSync(password, salt);

    const user = await new User({
      username,
      email,
      password: hashedPassword,
    });
    await user.save();
    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Internal server error 🔴", err);
    res.status(500).json({ error: `${err.message} 🔴` });
  }
};

const loginUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ email, username });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );
    await User.findByIdAndUpdate(user._id, { token });
    res.json({ token: token, message: `Welcome ${user.email}` });
  } catch (err) {
    console.error("Internal server error 🔴", err);
    res.status(500).json({ error: `${err.message} 🔴` });
  }
};

const logoutUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const loggedOutUser = await User.findByIdAndUpdate(
      userId,
      { token: null },
      { new: true }
    );
    if (!loggedOutUser) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(203).json(`User has been logged out`);
  } catch (err) {
    console.error("Internal server error 🔴", err);
    res.status(500).json({ error: `${err.message} 🔴` });
  }
};

export { registerUser, loginUser, logoutUser };

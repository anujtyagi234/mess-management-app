const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Admin = require("../models/adminModel");
const Warden = require("../models/chiefwardenModel");
const Accountant = require("../models/accountantModel");
require("dotenv").config();
const saltRounds = parseInt(process.env.SALT);

const signup = async (req, res) => {
  const { college_gmail_id, registration_no, hostelname, password, user_name } = req.body;

  try {
    const existingUser = await User.findOne({ college_gmail_id });
    if (existingUser) {
      return res.status(400).json({ error: "User already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({
      college_gmail_id,
      registration_no,
      hostelname,
      password: hashedPassword,
      user_name,
    });

    await user.save();
    res.json({ message: "Signup successful" });
  } catch (err) {
    console.error("Error in signup:", err);
    res.status(500).json({ error: "Failed to signup. Please try again later." });
  }
};

const login = async (req, res) => {
  const { college_gmail_id, password, userrole } = req.body;

  try {
    let existingUser;
    let userModel;

    switch (userrole) {
      case 'student':
        userModel = User;
        break;
      case 'admin':
        userModel = Admin;
        break;
      case 'chief warden':
        userModel = Warden;
        break;
      case 'accountant':
        userModel = Accountant;
        break;
      default:
        return res.status(400).json({ error: "Invalid user role" });
    }

    existingUser = await userModel.findOne({ college_gmail_id });

    if (!existingUser) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);

    if (isPasswordValid) {
      const token = jwt.sign(
        { _id: existingUser._id, userrole: userrole },
        process.env.JWTPRIVATEKEY,
        { expiresIn: "7d" }
      );

      res.json({ message: "Login successful", token });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.error("Error in login:", err);
    res.status(500).json({ error: "Failed to login. Please try again later." });
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.user._id;
    const userrole = req.user.userrole;
    let userModel;

    switch (userrole) {
      case 'student':
        userModel = User;
        break;
      case 'admin':
        userModel = Admin;
        break;
      case 'chief warden':
        userModel = Warden;
        break;
      case 'accountant':
        userModel = Accountant;
        break;
      default:
        return res.status(400).json({ error: "Invalid user role" });
    }

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (err) {
    console.error("Error in fetching user:", err);
    res.status(500).json({ error: "Failed to fetch user. Please try again later." });
  }
};

module.exports = { signup, login, getUser };

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config();
const saltRounds = parseInt(process.env.SALT);

const signup = async (req, res) => {
  const { college_gmail_id, registration_no, hostelname, password, user_name } = req.body;

  try {
    // Check if a user with the same college_gmail_id already exists
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
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const { college_gmail_id, password } = req.body;

  try {
    // Check if a user with the same college_gmail_id already exists
    const existingUser = await User.findOne({ college_gmail_id });

    if (!existingUser) {
      return res.status(401).json({ error: "please enter valid credentials" });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);

    if (isPasswordValid) {
      // Generate a JWT token with user data
      const token = jwt.sign(
        {
          _id: existingUser._id
        },
        process.env.JWTPRIVATEKEY,
        { expiresIn: "7d" }
      );

      res.json({
        message: "Login successful",
        token: token,
      });
    } else {
      res.status(401).json({ error: "please enter valid credentials" });
    }
  } catch (err) {
    console.error("Error in login:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { signup, login };

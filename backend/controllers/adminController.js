const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Warden = require("../models/chiefwardenModel");
const Accountant = require("../models/accountantModel");
const Admin = require("../models/adminModel");
require("dotenv").config();
const saltRounds = parseInt(process.env.SALT);

const addchiefwarden = async (req, res) => {
  const { college_gmail_id, password, user_name } = req.body;

  try {
    // Check if a user with the same college_gmail_id already exists
    const existingUser = await Warden.findOne({ college_gmail_id });

    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new Warden({
      college_gmail_id,
      password: hashedPassword,
      user_name,
    });

    await user.save();
    res.status(201).json({ message: "Chief Warden added successfully" });
  } catch (err) {
    console.error("Error adding chief warden:", err);
    res.status(500).json({ error: "Failed to add chief warden" });
  }
};

const addaccountant = async (req, res) => {
  const { college_gmail_id, hostelname, password, user_name } = req.body;

  try {
    // Check if a user with the same college_gmail_id already exists
    const existingUser = await Accountant.findOne({ college_gmail_id });

    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new Accountant({
      college_gmail_id,
      hostelname,
      password: hashedPassword,
      user_name,
    });

    await user.save();
    res.status(201).json({ message: "Accountant added successfully" });
  } catch (err) {
    console.error("Error adding accountant:", err);
    res.status(500).json({ error: "Failed to add accountant" });
  }
};

const addadmin = async (req, res) => {
  const { college_gmail_id, password, user_name } = req.body;

  try {
    // Check if a user with the same email already exists
    const existingUser = await Admin.findOne({ college_gmail_id });

    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new Admin({
      college_gmail_id,
      password: hashedPassword,
      user_name,
    });

    await user.save();
    res.status(201).json({ message: "Admin added successfully" });
  } catch (err) {
    console.error("Error adding admin:", err);
    res.status(500).json({ error: "Failed to add admin" });
  }
};

module.exports = { addaccountant, addchiefwarden, addadmin };

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Warden = require("../models/chiefwardenModel");
const Accountant = require("../models/accountantModel");
require("dotenv").config();
const saltRounds = parseInt(process.env.SALT);



/**
 * Add a new chief warden to the database.
 *  req - Express request object containing the user data in the body.
 *  res - Express response object to send the result back to the client.
 */


const addchiefwarden = async (req, res) => {
  const { college_gmail_id,  password, user_name } = req.body;

  try {
    // Check if a user with the same college_gmail_id already exists
    const existingUser = await Warden.findOne({ college_gmail_id });

    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // Create a new Warden instance with hashed password
    const user = new Warden({
      college_gmail_id,
      password: hashedPassword,
      user_name,
    });

    await user.save();
    res.json({ message: "successfully Added" });
  } catch (err) {
    console.error("Error in signup:", err);
    res.status(500).json({ error: "Internal Server Error" });
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
      res.json({ message: "successfully Added" });
    } catch (err) {
      console.error("Error in signup:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };


module.exports = { addaccountant , addchiefwarden };

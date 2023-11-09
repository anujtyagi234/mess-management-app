const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const app = express();
require("dotenv").config();


app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());



// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/Myregistration")
	.then(() => {
		console.log("Connected to MongoDB successfully");
	})
	.catch((error) => console.error("Error connecting to MongoDB:", error))


const userSchema = new mongoose.Schema({
	college_gmail_id: {
		type: String,
		required: true,
	},
	registration_no: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	hostelname: {
		type: String,
		required: true,
	},
	user_name:{
		type:String,
		required:true,
	}
});

const User = mongoose.model("User", userSchema);

app.post("/signup", async (req, res) => {
	console.log(req.body);
  
	const { college_gmail_id, registration_no, hostelname, password, user_name } = req.body;
  
	try {
	  // Check if a user with the same college_gmail_id already exists
	  const existingUser = await User.findOne({ college_gmail_id });
  
	  if (existingUser) {
		res.json({ message: "User already registered" }); 
	  } else {
		const hashedPassword = await bcrypt.hash(password,process.env.SALT);
		const user = new User({
		  college_gmail_id,
		  registration_no,
		  hostelname,
		  password:hashedPassword,
		  user_name,
		});
  
		await user.save();
		res.json({ message: "Signup successful" });
	  }
	} catch (err) {
	  res.status(400).json({ error: err.message });
	}
  });

  app.post("/login", async (req, res) => {
	console.log(req.body);
  
	const { college_gmail_id, password } = req.body;
  
	try {
	  // Check if a user with the same college_gmail_id already exists
	  const existingUser = await User.findOne({ college_gmail_id });
  
	  if (!existingUser) {
		res.json({ message: "Email not found" });
	  } else {
		// Compare the provided password with the hashed password in the database
		const isPasswordValid = await bcrypt.compare(password, existingUser.password);
  
		if (isPasswordValid) {
		  // Generate a JWT token with user data
		  const token = jwt.sign(
			{
			  _id: existingUser._id,
			  college_gmail_id: existingUser.college_gmail_id,
			  user_name: existingUser.user_name,
			  hostelname: existingUser.hostelname,
			  registration_no: existingUser.registration_no
			},
			process.env.JWTPRIVATEKEY,
			{ expiresIn: "7d" }
		  );
  
		  res.json({
			message: "Login successful",
			token: token,
		  });
		} else {
		  res.json({ message: "Incorrect password" });
		}
	  }
	} catch (err) {
	  res.status(400).json({ error: err.message });
	}
  });

app.listen(3000,()=>{
console.log("Server started at port 3000")
})
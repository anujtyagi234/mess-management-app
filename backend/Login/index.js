const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));


// to login  validity accroding to the date,time,years etc 
const jwt = require("jsonwebtoken");

const passwordComplexity = require("joi-password-complexity");


const Joi = require("joi");
app.use(cors());

// Connect to MongoDB


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

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("User", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		college_gmail_id: Joi.string().required().label("Collage_id"),

		password: passwordComplexity().required().label("Password"),
		registration_no: Joi.string().required().label("Ragistration number"),
        user_name:Joi.string().required().label("user name"),
		hostelname: Joi.string().required().label("Hostelname"),

	});
	return schema.validate(data);
};

module.exports = { User, validate };





mongoose.connect("mongodb://127.0.0.1:27017/Myragistration")
	.then(() => {
		console.log("Connected to MongoDB successfully");
		// Your code for checking or performing operations in the database can go here
	})
	.catch((error) => console.error("Error connecting to MongoDB:", error))
app.get("/",(req,res)=>{
	res.send("dsghsdhf");
})
app.post("/Signup", (req, res) => {
	const { error } = validate(req.body);
	if (error) {
	  return res.status(400).send({ message: error.details[0].message });
	}
	// Add code to save the user data to the database
	console.log(req.body); // log the request body to the terminal
	res.send("Received the signup data"); // send a response to the frontend
	

User.findOne({email:email},(err,user)=>{
	if(user){
		res.send({message:"User already registered"})
	}
	else{
		const{registration_no,password, user_name,hostelname,college_gmail_id} = req.body
		const user = new User({
			registration_no,
			password,
			 user_name,
			 hostelname,
			 college_gmail_id
			 //shorhand notation
		})
	
		user.save(err=>{
			if(err){
				res.send(err)
			}
			else{
				res.send({massage:"Successfully Sing up"})
			}
		})
	}
})

	
  });
  

app.post("/Login",(req,res)=>{
	res.send("My sighnup Api")
})

	app.listen(3000,()=>{
		console.log("Server started at port 3000")
	})
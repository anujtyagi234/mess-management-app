const mongoose = require("mongoose");

// to login  validity accroding to the date,time,years etc 
const jwt = require("jsonwebtoken");

const passwordComplexity = require("joi-password-complexity");


const Joi = require("joi");

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

		registration_no: Joi.string().required().label("Raagistration number"),

		hostelname: Joi.string().required().label("Hostelname"),

		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };

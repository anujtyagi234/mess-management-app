const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
	.connect("mongodb://127.0.0.1:27017/ragistration", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to MongoDB successfully");
		// Your code for checking or performing operations in the database can go here
	})
	.catch((error) => console.error("Error connecting to MongoDB:", error));

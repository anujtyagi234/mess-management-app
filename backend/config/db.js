const mongoose = require("mongoose");
const { DB_NAME } = require("./constant");

const connectToDatabase = async () => {
  try {
  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
module.exports = { connectToDatabase };

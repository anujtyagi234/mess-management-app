const mongoose = require("mongoose");

const connectToDatabase = async () => {
  const { MONGODB_URI, DB_NAME } = process.env;

  if (!MONGODB_URI || !DB_NAME) {
    console.error("MONGODB_URI and DB_NAME must be defined in environment variables");
    process.exit(1);
  }

  try {
    await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = { connectToDatabase };
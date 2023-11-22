const express = require("express");
const cors = require("cors");
const app = express();
const { connectToDatabase } = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes")
const uploadRoutes = require("./routes/uploadRoutes");

require("dotenv").config();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
connectToDatabase();

// Use auth routes
app.use("/api/auth", authRoutes);
app.use("/admin",adminRoutes)
app.use("/upload",uploadRoutes)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

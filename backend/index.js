const express = require("express");
const cors = require("cors");
const app = express();
const { connectToDatabase } = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes")
const complain = require('./routes/complainRoutes')
const fetchComplaintRoutes = require('./routes/fetchComplainRoutes');
const updateComplaintRoute = require('./routes/updateComplainRoutes');
const path = require('path');

require("dotenv").config();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
connectToDatabase();

// Use auth routes
app.use("/api/auth", authRoutes);
app.use("/admin",adminRoutes)
app.use("/api",complain)
app.use("/api", fetchComplaintRoutes);
app.use('/api/complaints', updateComplaintRoute);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

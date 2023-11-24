const express = require("express");
const cors = require("cors");
const app = express();
const { connectToDatabase } = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes")
const uploadRoutes = require("./routes/uploadRoutes");
const resetRoutes = require("./routes/resetRoutes");
const newpwRoute = require("./routes/newpwRoute");
const complain = require('./routes/complainRoutes')
const fetchComplaintRoutes = require('./routes/fetchComplainRoutes');
const resolveComplaintRoute = require('./routes/updateComplainRoutes');
const path = require('path');

require("dotenv").config();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Connect to MongoDB
connectToDatabase();

// Use auth routes
app.use("/api/auth", authRoutes);
app.use("/admin",adminRoutes);
app.use("/upload",uploadRoutes);
app.use("/api",resetRoutes);
app.use("/api",newpwRoute);
app.use("/admin",adminRoutes)
app.use("/api",complain)
app.use("/api", fetchComplaintRoutes);
app.use('/api/complaints', resolveComplaintRoute);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

const express = require("express");
const cors = require("cors");
const path = require('path');
const { connectToDatabase } = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes")
const resetRoutes = require("./routes/resetRoutes");
const newpwRoute = require("./routes/newpwRoute");
const complainRoutes = require('./routes/complainRoutes')
const messMenuRoutes = require('./routes/messMenuRoutes')
const noticeRoutes = require('./routes/NoticeRoutes')
const expenseRoutes = require('./routes/expenseRoutes');
const RatingRoutes = require('./routes/RatingRoutes');

require("dotenv").config();

const app = express();
const PORT =  process.env.PORT||3000;

// Middleware
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
connectToDatabase();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", resetRoutes);
app.use("/api", newpwRoute);
app.use("/api", complainRoutes);
app.use("/api/ratings", RatingRoutes);
app.use("/messMenu", messMenuRoutes);
app.use("/admin", adminRoutes);
app.use("/", noticeRoutes);
app.use('/messExpense', expenseRoutes);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

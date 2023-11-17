const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  college_gmail_id: {
    type: String,
    required: true,
	unique: true
  },
  password: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  userrole: {
    type: String,
    default: 'admin'
  }
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;

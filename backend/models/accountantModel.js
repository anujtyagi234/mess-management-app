const mongoose = require("mongoose");

const accountantSchema = new mongoose.Schema({
  college_gmail_id: {
    type: String,
    required: true,
	unique: true
  },
  password: {
    type: String,
    required: true,
  },
  hostelname: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  userrole: {
    type: String,
    default: 'accountant'
  }
});

const Accountant = mongoose.model("Accountant", accountantSchema);

module.exports = Accountant;

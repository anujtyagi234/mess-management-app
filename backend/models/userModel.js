const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({ 
  college_gmail_id: {
    type: String,
    required: true,
	unique: true
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
  user_name: {
    type: String,
    required: true,
  },
  userrole: {
    type: String,
    default: 'student'
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;

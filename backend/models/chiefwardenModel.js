const mongoose = require("mongoose");

const wardenSchema = new mongoose.Schema({
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
    default: 'chief warden'
  },
 
  
});

const Warden = mongoose.model("Warden", wardenSchema);

module.exports = Warden;
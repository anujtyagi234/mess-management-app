const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Admin = require('../models/adminModel')
const Warden = require('../models/chiefwardenModel')
const Accountant = require('../models/accountantModel')
require("dotenv").config();

const authMiddleware = async (req, res, next) => {
  const authtoken = req.headers.authorization;
  if (!authtoken || !authtoken.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }
  const token = authtoken.slice(7);

  try {
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
    let user;

    if (decoded.userrole === 'admin') {
      user = await Admin.findById(decoded._id);
    } else if (decoded.userrole === 'chief warden') {
      user = await Warden.findById(decoded._id);
    } else if (decoded.userrole === 'accountant') {
      user = await Accountant.findById(decoded._id);
    } else {
      user = await User.findById(decoded._id);
    }

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.userrole)) {
      console.log(req.user.userrole)
      console.log(roles)
      return res.status(403).json({ message: 'Not authorized' });
    }
    next();
  };
};

module.exports = { authMiddleware,authorize };

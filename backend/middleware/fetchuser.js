const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
require("dotenv").config();

// Middleware to fetch user data based on token
function getUserDataFromToken(req, res, next) {
  const authtoken = req.headers.authorization;

  let token = null;

  if (authtoken && authtoken.startsWith('Bearer ')) {
    token = authtoken.slice(7);
  }

  if (!token) {
    return res.status(403).json({ message: 'Token is not provided' });
  }
  
  jwt.verify(token, process.env.JWTPRIVATEKEY, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = decoded._id;

    // Query the database using the user ID
    User.findById(userId)
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      req.user = user;
      next();
    })
    .catch(err => {
      return res.status(500).json({ message: 'Error fetching user' });
    });
  
  });
}

module.exports = { getUserDataFromToken };

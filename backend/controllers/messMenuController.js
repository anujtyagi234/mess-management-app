const MessMenu= require('../models/menuModel')

const fetchMessMenu = async (req, res) => {
    console.log(req.query)
    const {hostel} = req.query
    try {
      const messMenu = await MessMenu.find({ hostel: hostel });
      res.status(200).json({ messMenu });
    } catch (error) {
      console.error('Error fetching messMenu:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const updateMessMenu = async (req, res) => {
    try {
      const { hostel, newMenu } = req.body;
  
      // Update the MessMenu based on the hostel value
      const updatedMenu = await MessMenu.findOneAndUpdate(
        { hostel: hostel },
        { $set: { /* Update fields here using newMenu data */ } },
        { new: true } // To return the updated document
      );
  
      res.status(200).json({ updatedMenu });
    } catch (error) {
      console.error('Error updating messMenu:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = { fetchMessMenu, updateMessMenu };
const MessMenu= require('../models/menuModel')

const fetchMessMenu = async (req, res) => {
    const hostel = req.user.hostelname;
    try {
      const messMenu = await MessMenu.find({ hostel: hostel });
      res.status(200).json({ messMenu });
    } catch (error) {
      console.error('Error fetching messMenu:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const chiefFetchMessMenu = async (req, res) => {
    const hostel = req.query.hostel;
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
      const {m1, m2, m3, m4, special, mealType, day,hostel } = req.body;
  
      // Construct the update object
      const updateObj = {
        $set: {
          [`${mealType}.$[elem].m1`]: m1,
          [`${mealType}.$[elem].m2`]: m2,
          [`${mealType}.$[elem].m3`]: m3,
          [`${mealType}.$[elem].m4`]: m4,
          [`${mealType}.$[elem].special`]: special,
        }
      };
  
      // Define the arrayFilters for matching the correct element based on day
      const arrayFilters = [
        { "elem.day": day }
      ];
      console.log(updateObj)
      console.log(arrayFilters)
      // Update the MessMenu document
      const updatedMenu = await MessMenu.findOneAndUpdate(
        { hostel: hostel },
        updateObj,
        {
          new: true,
          arrayFilters: arrayFilters
        }
      );
      console.log(updatedMenu);
      res.status(200).json({ updatedMenu });
    } catch (error) {
      console.error('Error updating messMenu:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = { fetchMessMenu, updateMessMenu, chiefFetchMessMenu };
  
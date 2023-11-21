const mongoose = require('mongoose');

const Hostels = [
  "SwamiViveka Nand Boys Hostel(SVBH)",
  "Bal Gangadhar Tilak Hostel(Tilak Hostel)",
  "Sardar Ballabh Bhai Patel Hostel(Patel Hostel)",
  "Ravindra Nath Taigore Hostel(Taigore Hostel)",
  "Diamond Jublee Girls Hostel(DG)",
];

const MessMenuSchema = new mongoose.Schema({
  hostel: {
    type: String,
    enum: Hostels,
    required: true
  },
  day: {
    type: String,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    required: true
  },
  mealTime: {
    type: String,
    enum: ['Morning', 'Noon', 'Evening', 'Night'],
    required: true
  },
  items: [{ type: String }],
});


const MessMenu = mongoose.model("MessMenu", MessMenuSchema);

module.exports = MessMenu;
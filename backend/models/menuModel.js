const mongoose = require('mongoose');

const Hostels = [
  "SwamiViveka Nand Boys Hostel(SVBH)",
  "Bal Gangadhar Tilak Hostel(Tilak Hostel)",
  "Sardar Ballabh Bhai Patel Hostel(Patel Hostel)",
  "Ravindra Nath Taigore Hostel(Taigore Hostel)",
  "Diamond Jublee Girls Hostel(DG)",
];

const Days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const MessMenuSchema = new mongoose.Schema({
  hostel: {
    type: String,
    enum: Hostels,
    required: true
  },
  breakfast: [
    {
      day: { type: String, enum: Days },
      special: String,
      m1: String,
      m2: String,
      m3: String,
      m4: String,
    }
  ],
  lunch: [
    {
      day: { type: String, enum: Days },
      special: String,
      m1: String,
      m2: String,
      m3: String,
      m4: String,
    }
  ],
  dinner: [
    {
      day: { type: String, enum: Days },
      special: String,
      m1: String,
      m2: String,
      m3: String,
      m4: String,
    }
  ],
  supper: [
    {
      day: { type: String, enum: Days },
      special: String,
      m1: String,
      m2: String,
      m3: String,
      m4: String,
    }
  ]
});

const MessMenu = mongoose.model("MessMenu", MessMenuSchema);

module.exports = MessMenu;

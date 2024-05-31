const mongoose = require('mongoose');

const Hostels = [
  "SwamiViveka Nand Boys Hostel(SVBH)",
  "Bal Gangadhar Tilak Hostel(Tilak Hostel)",
  "Sardar Ballabh Bhai Patel Hostel(Patel Hostel)",
  "Ravindra Nath Taigore Hostel(Taigore Hostel)",
  "Diamond Jublee Girls Hostel(DG)",
];

const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const expenseSchema = new mongoose.Schema({
  year: Number,
  month: {
    type: String,
    enum: Months,
  },
  hostel: {
    type: String,
    enum: Hostels,
  },
  expenses: {
    vegetables: Number,
    fruits: Number,
    provisions: Number,
    others: Number,
  },
});

module.exports = mongoose.model('Expense', expenseSchema);

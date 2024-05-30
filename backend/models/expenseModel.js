



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


const expenseItemSchema = new mongoose.Schema({
  hostel: {
    type: String,
    enum: Hostels,
    required: true
  },
  week1: [
    {
      month: { type: String, enum: Months},
      vegetables: String,
      fruits: String,
      provisions: String,
      others: String,
      
    }
  ],
  week2: [
    {
      month: { type: String, enum: Months},
      vegetables: String,
      fruits: String,
      provisions: String,
      others: String,
    }
  ],
  week3: [
    {
      month: { type: String, enum: Months},
      vegetables: String,
      fruits: String,
      provisions: String,
      others: String,
    }
  ],
  week4: [
    {
      month: { type: String, enum: Months},
      vegetables: String,
      fruits: String,
      provisions: String,
      others: String,
    }
  ],
  others: [
    {
      month: { type: String, enum: Months},
      vegetables: String,
      fruits: String,
      provisions: String,
      others: String,
    }
  ]
});

const Expense = mongoose.model("Expense", expenseItemSchema );

module.exports = Expense;


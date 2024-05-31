const Expense = require('../models/expenseModel');

const MONTHS_OF_YEAR = [
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

const fetchExpense = async (req, res) => {
  const year = req.query.year;
  const hostel = req.user.hostelname;
  try {
    let expenses = await Expense.find({ year, hostel });
    
    // Check if data exists for all 12 months
    const monthsWithData = expenses.map(expense => expense.month);
    const missingMonths = MONTHS_OF_YEAR.filter(month => !monthsWithData.includes(month));

    // If data is missing for any month, add default data
    if (missingMonths.length > 0) {
      missingMonths.forEach(month => {
        expenses.push({
          month,
          expenses: {
            vegetables: 0,
            fruits: 0,
            provisions: 0,
            others: 0
          }
        });
      });
    }

    res.status(200).json({ expenses });
  } catch (error) {
    console.error('Error fetching expenses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const updateExpense = async (req, res) => {
  try {
    const { vegetables, fruits, provisions, others, month,year } = req.body;
    console.log(req.body)
    const hostel = req.user.hostelname;
    
    // Check if expense exists for the given month
    let expense = await Expense.findOne({ month, hostel });

    // If expense doesn't exist, create a new one
    if (!expense) {
      expense = new Expense({
        year: new Date().getFullYear(),
        month,
        hostel,
        expenses: {
          vegetables,
          fruits,
          provisions,
          others,
        },
      });
    }

    // Update the expense
expense.expenses.vegetables = vegetables;
expense.expenses.fruits = fruits;
expense.expenses.provisions = provisions;
expense.expenses.others = others;

    const updatedExpense = await expense.save();

    res.status(200).json({ updatedExpense });
  } catch (error) {
    console.error('Error updating expenses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { fetchExpense, updateExpense };

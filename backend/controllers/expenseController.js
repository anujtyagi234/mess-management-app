const Expense = require('../models/expenseModel');

const fetchExpense = async (req, res) => {
  const hostel = req.user.hostelname;
  try {
    const expenses = await Expense.find({hostel: hostel});
    console.log("sumit_control",expenses);
    res.status(200).json({ expenses });
  } catch (error) {
    console.error('Error fetching expenses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const chiefFetchExpense = async (req, res) => {
  const hostel = req.query.hostel;
  try {
    const expenses = await Expense.find({ hostel: hostel });
    res.status(200).json({ expenses });
  } catch (error) {
    console.error('Error fetching expenses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateExpense = async (req, res) => {
  try {
    const { vegetables, fruits, provisions, others, expenseType, month, hostel } = req.body;
    const updateObj = {
      $set: {
        [`${expenseType}.$[elem].vegetables`]: vegetables,
        [`${expenseType}.$[elem].fruits`]: fruits,
        [`${expenseType}.$[elem].provisions`]: provisions,
        [`${expenseType}.$[elem].others`]: others,
      },
    };
    const arrayFilters = [{ "elem.month": month }];
    const updatedExpense = await Expense.findOneAndUpdate(
      { hostel: hostel },
      updateObj,
      {
        new: true,
        arrayFilters: arrayFilters,
      }
    );
    res.status(200).json({ updatedExpense });
  } catch (error) {
    console.error('Error updating expenses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { fetchExpense, chiefFetchExpense, updateExpense };

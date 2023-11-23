const Complaint = require('../models/complainModel');

const fetchComplaints = async (req, res) => {
  try {
    // Fetch all complaints from the database
    const complaints = await Complaint.find();

    res.status(200).json({ complaints });
  } catch (error) {
    console.error('Error fetching complaints:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { fetchComplaints };

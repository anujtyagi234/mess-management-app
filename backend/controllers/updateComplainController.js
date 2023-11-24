const Complaint = require('../models/complainModel');

const resolveComplaint = async (req, res) => {
  try {
    const { complaintId } = req.params;

    const updatedComplaint = await Complaint.findByIdAndUpdate(
      complaintId,
      { resolved: true, resolvedAt: new Date() },
      { new: true }
    );

    res.status(200).json(updatedComplaint);
  } catch (error) {
    console.error('Error resolving complaint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { resolveComplaint };

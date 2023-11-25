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

const likeComplaint = async (req, res) => {
  try {
    const { complaintId } = req.params;
    const { userId } = req.body;

    // Find the complaint by ID
    const complaint = await Complaint.findById(complaintId);

    // Check if the user exists in likedUsers array
    const userLiked = complaint.likedUsers.find(entry => entry.user.toString() === userId);

    complaint.likes  = complaint.likes+1;
    if (!userLiked) {
      // If the user doesn't exist in likedUsers array, create a new entry with like:true
      complaint.likedUsers.push({ user: userId, like: true , dislike: false});
    }    
    else{
      if(userLiked.dislike){
        complaint.dislikes = complaint.dislikes-1;
      }
      userLiked.like = true;
      userLiked.dislike = false;}
      const updatedComplaint = await Complaint.findByIdAndUpdate(complaintId, {
      $set: {
        likedUsers: complaint.likedUsers,
        likes: complaint.likes,
        dislikes: complaint.dislikes,
      },
    },{ new: true },);
    res.status(200).json(updatedComplaint);
  } catch (error) {
    console.error('Error liking complaint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const dislikeComplaint = async (req, res) => {
  try {
    const { complaintId } = req.params;
    const { userId } = req.body;

    // Find the complaint by ID
    const complaint = await Complaint.findById(complaintId);
    // Check if the user exists in likedUsers array
    const userLiked = complaint.likedUsers.find(entry => entry.user.toString() === userId);

    complaint.dislikes  = complaint.dislikes+1;
    if (!userLiked) {
      // If the user doesn't exist in likedUsers array, create a new entry with like:true
      complaint.likedUsers.push({ user: userId, like: false , dislike: true});
    }
    else{
    if(userLiked.like){
      complaint.likes = complaint.likes-1;
    }
    userLiked.like = false;
    userLiked.dislike = true;}
    const updatedComplaint = await Complaint.findByIdAndUpdate(complaintId, {
      $set: {
        likedUsers: complaint.likedUsers,
        likes: complaint.likes,
        dislikes: complaint.dislikes,
      },
    },
    { new: true },);
    res.status(200).json(updatedComplaint);
  } catch (error) {
    console.error('Error disliking complaint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { resolveComplaint, likeComplaint, dislikeComplaint };

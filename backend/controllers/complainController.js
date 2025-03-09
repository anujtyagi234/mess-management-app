const Complaint = require('../models/complainModel');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { uploadOnCloudinary } = require('../utils/cloudinary');

const complaintController = {
  submitComplaint: async (req, res) => {
    const userId = req.user._id;
    const hostelName = req.user.hostelname;

    const { title, description} = req.body;
    const files = req.files;
    const uploadedImages = [];

    try {
      if (!files || Object.keys(files).length === 0) {
        return res.status(400).json({ error: 'No files uploaded' });
      }

      for (const file of files) {
        const cloudinaryResponse = await uploadOnCloudinary(file.path);
        if (cloudinaryResponse) {
          uploadedImages.push(cloudinaryResponse.secure_url);
        }
      }

      const complaint = new Complaint({
        user: userId,
        title,
        description,
        hostelName,
        images: uploadedImages,
      });

      await complaint.save();
      return res.json({ message: 'Complaint submitted successfully' });
    } catch (err) {
      console.error('Error submitting complaint:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  fetchComplaints: async (req, res) => {
    try {
      // Fetch all complaints from the database
      const complaints = await Complaint.find();

      res.status(200).json({ complaints });
    } catch (error) {
      console.error('Error fetching complaints:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  resolveComplaint: async (req, res) => {
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
  },

  likeComplaint : async (req, res) => {
    try {
      const { complaintId } = req.params;
      const userId = req.user._id;
  
      // Find the complaint by ID
      const complaint = await Complaint.findById(complaintId);
  
      // Check if the user exists in likedUsers array
      const userLiked = complaint.likedUsers.find(entry => entry.user.toString() === userId.toString());
      console.log(userLiked);
  
      if(!userLiked || !userLiked.like) complaint.likes  = complaint.likes+1;
      if (!userLiked) {
        complaint.likedUsers.push({ user: userId, like: true , dislike: false});
      }    
      else{
        if(userLiked.dislike){
          complaint.dislikes = complaint.dislikes-1;
          userLiked.like = true;
          userLiked.dislike = false;
        }
        }
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
  },

  dislikeComplaint : async (req, res) => {
    try {
      const { complaintId } = req.params;
      const userId = req.user._id;
  
      // Find the complaint by ID
      const complaint = await Complaint.findById(complaintId);
      // Check if the user exists in likedUsers array
      console.log(complaint.likedUsers)
      const userLiked = complaint.likedUsers.find(entry => entry.user.toString() === userId.toString());
  
      if(!userLiked || !userLiked.dislike) complaint.dislikes  = complaint.dislikes+1;
      if (!userLiked) {
        complaint.likedUsers.push({ user: userId, like: false , dislike: true});
      }
      else{
      if(userLiked.like){
        complaint.likes = complaint.likes-1;
        userLiked.like = false;
        userLiked.dislike = true;
      }
      }
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
  }
};

module.exports = complaintController;

import React, { useState,useEffect } from 'react';
import '../../ChiefWarden/Common.css';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

const Student_complaints = () => {
    const [userActions, setUserActions] = useState({});
    const [complaints, setComplaints] = useState([]);
    const token = localStorage.getItem('token');
    const jwtDecodedId = jwtDecode(token)._id;

    useEffect(() => {
      // Fetch complaints data from the backend when the component mounts
      axios.get('http://localhost:3000/api/fetchcomplaints')
        .then((response) => {
          const { complaints: fetchedComplaints } = response.data;
          setComplaints(fetchedComplaints);
        })
        .catch((error) => {
          console.error('Error fetching complaints:', error);
        });
    }, []);

    const handleLike = (complaintId) => {
      const foundComplaint = complaints.find((complaint) => complaint._id === complaintId);
      const likedUser = foundComplaint.likedUsers.find((user) => user.user === jwtDecodedId);
      if (!likedUser || !likedUser.like) {
        axios.put(`http://localhost:3000/api/complaints/${complaintId}/liked`,{userId: jwtDecodedId})
        .then((response) => {
          const updatedComplaint = response.data;
          setComplaints((prevComplaints) =>
            prevComplaints.map((complaint) =>
              complaint._id === updatedComplaint._id ? updatedComplaint : complaint
            )
          );
        })
        .catch((error) => {
          console.error('Error resolving complaint:', error);
        });
      }
    };
  
    const handleDislike = (complaintId) => {
      const foundComplaint = complaints.find((complaint) => complaint._id === complaintId);
      const likedUser = foundComplaint.likedUsers.find((user) => user.user === jwtDecodedId);
      if (!likedUser || !likedUser.dislike) {
        axios.put(`http://localhost:3000/api/complaints/${complaintId}/disliked`,{userId: jwtDecodedId})
        .then((response) => {
          const updatedComplaint = response.data;
          setComplaints((prevComplaints) =>
            prevComplaints.map((complaint) =>
              complaint._id === updatedComplaint._id ? updatedComplaint : complaint
            )
          );
        })
        .catch((error) => {
          console.error('Error resolving complaint:', error);
        });
      }
    };
    
    // Check if complaints is an array before filtering
    const unresolvedComplaints = Array.isArray(complaints)
    ? complaints.filter((complaint) => !complaint.resolved)
    : [];
    console.log(unresolvedComplaints)
    
  return (
    <div className='Maincontainer'>
      <div className="comlainheading">
        <span>
          <h2 style={{ fontSize: "1.5rem", marginTop: "1.1rem", fontFamily: "serif", fontWeight: "bold" }}>
            <b><span>Students Complaints </span></b>
          </h2>
        </span>
      </div>
      <div className="deatailas_complain">
        <ul>
          {unresolvedComplaints.map((complaint) => (
            <li key={complaint._id}>
              <h3><b>Subject: </b>{complaint.title}</h3>
              <p><b>Description: </b>{complaint.description}</p>
              <p><b>Created at: </b>{new Date(complaint.createdAt).toLocaleString()}</p>
              <p><b>Likes: </b>{complaint.likes}</p>
              <p><b>Dislike: </b>{complaint.dislikes}</p>
              {complaint.images && <img src={`http://localhost:3000/uploads/${complaint.images}`} alt="Complaint" style={{ maxWidth: '300px' }} />}
              <div className="like-dislike-buttons">
                    <button onClick={() => handleLike(complaint._id)}>
                      Like
                    </button>
                    <button onClick={() => handleDislike(complaint._id)}>
                      Dislike
                    </button>
                  </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Student_complaints;
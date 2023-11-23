import React, { useState,useEffect } from 'react';
import '../../ChiefWarden/Common.css';
import axios from 'axios';

const Student_complaints = () => {
    const [userActions, setUserActions] = useState({});
    const [complaints, setComplaints] = useState([]);

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
        if (!userActions[complaintId]) {
            const updatedComplaints = complaints.map((complaint) => {
              if (complaint._id === complaintId) {
                return {
                  ...complaint,
                  likes: complaint.likes + 1,
                };
              }
              return complaint;
            });
            setComplaints(updatedComplaints);
            setUserActions({ ...userActions, [complaintId]: 'liked' });
          }
    };
  
    const handleDislike = (complaintId) => {
        if (!userActions[complaintId]) {
            const updatedComplaints = complaints.map((complaint) => {
              if (complaint._id === complaintId) {
                return {
                  ...complaint,
                  dislikes: complaint.dislikes + 1,
                };
              }
              return complaint;
            });
            setComplaints(updatedComplaints);
            setUserActions({ ...userActions, [complaintId]: 'disliked' });
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
                    <button onClick={() => handleLike(complaint._id, 'likes')}>
                      Like
                    </button>
                    <button onClick={() => handleDislike(complaint._id, 'dislikes')}>
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

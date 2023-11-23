import React, { useState,useEffect } from 'react';
import './Common.css';
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
    
    // Check if complaints is an array before filtering
    const resolvedComplaints = Array.isArray(complaints)
    ? complaints.filter((complaint) => complaint.resolved)
    : [];
    console.log(resolvedComplaints)
    
  return (
    <div className='Maincontainer'>
      <div className="comlainheading"style={{fontFamily: 'Agbalumo'}} >
        <h2  style={{fontSize:"1.7rem",marginTop:"1.1rem",fontWeight:"bold",fontFamily: 'Agbalumo'}}>
          <b>Students Complaints</b>
        </h2>
      </div>
      <div className='we123'>
      <div className="deatailas_complain" style={{fontFamily: 'Agbalumo'}}>
        <ul>
          {resolvedComplaints.map((complaint) => (
            <li key={complaint._id}>
              <h3><b>Subject: </b>{complaint.title}</h3>
              <p><b>Description: </b>{complaint.description}</p>
              <p><b>Created at: </b>{new Date(complaint.createdAt).toLocaleString()}</p>
              <p><b>Likes: </b>{complaint.likes}</p>
              <p><b>Dislike: </b>{complaint.dislikes}</p>
              <p><b>Dislike: </b>{complaint.images}</p>
              <p><b>ResolvedAt: </b>{new Date(complaint.resolvedAt).toLocaleString()}</p>
              {complaint.images && <img src={`http://localhost:3000/uploads/${complaint.images}`} alt="Complaint" style={{ maxWidth: '300px' }} />}
            </li>
          ))}
        </ul>
      </div>
      </div>

    </div>
  );
};

export default Student_complaints;

import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Common.css';


const Chief_Student_complaints = () => {
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

    const resolveComplaint = (complaintId) => {
      axios.put(`http://localhost:3000/api/complaints/${complaintId}/resolved`)
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
    };
    
    // Check if complaints is an array before filtering
    const unresolvedComplaints = Array.isArray(complaints)
    ? complaints.filter((complaint) => !complaint.resolved)
    : [];
    console.log(unresolvedComplaints)

  return (
    <div className='Maincontainer' >
  
      <div className="comlainheading" style={{fontFamily: 'Agbalumo'}}>
        <span>
          <h2  style={{fontSize:"1.7rem",marginTop:"1.1rem",fontFamily: 'Agbalumo',fontWeight:"bold"}}>
            <b><span>Students Complaints </span></b>
          </h2>
        </span>
      </div>
      <div className="deatailas_complain" style={{fontFamily: 'Agbalumo'}}>
        <ul>
          {unresolvedComplaints.map((complaint) => (
            <li key={complaint._id}>
              <h3><b>Subject: </b>{complaint.title}</h3>
              <p><b>Description: </b>{complaint.description}</p>
              <p><b>Created at: </b>{new Date(complaint.createdAt).toLocaleString()}</p>
              <p><b>Likes: </b>{complaint.likes}</p>
              <p><b>Dislike: </b>{complaint.dislikes}</p>
              {complaint.images && <img src={`http://localhost:3000/uploads/${complaint.images}`} alt="Complaint" style={{ maxWidth: '300px' }} />}
              <button onClick={() => resolveComplaint(complaint._id)}>
                Resolve
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chief_Student_complaints;

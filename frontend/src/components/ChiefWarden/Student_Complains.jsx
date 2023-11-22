import React, { useState } from 'react';
import './Common.css';

const dummyComplaints = [
  {
    _id: 1,
    user: 'abcd',
    title: 'Slow Internet Speed',
    description: 'Experiencing very slow internet speed during peak hours.',
    image: 'https://via.placeholder.com/150',
    resolved: false,
    createdAt: new Date().toISOString(),
    resolvedAt: null,
    likes: 0,
    dislikes: 0,
  },
  {
    _id: 2,
    user: 'xyz',
    title: 'Noise Pollution',
    description: 'Loud construction noises early in the morning disrupting sleep.',
    image: 'https://via.placeholder.com/150',
    resolved: false,
    createdAt: new Date().toISOString(),
    resolvedAt: null,
    likes: 0,
    dislikes: 0,
  },
  {
    _id: 3,
    user: 'sample',
    title: 'Garbage Collection Issue',
    description: 'Garbage not collected for over a week.',
    image: 'https://via.placeholder.com/150',
    resolved: false,
    createdAt: new Date().toISOString(),
    resolvedAt: new Date().toISOString(),
    likes: 0,
    dislikes: 0,
  },
];

const Chief_Student_complaints = () => {
  const [complaints, setComplaints] = useState(dummyComplaints);

  const resolveComplaint = (complaintId) => {
    const updatedComplaints = complaints.map((complaint) => {
      if (complaint._id === complaintId) {
        return {
          ...complaint,
          resolved: true,
          resolvedAt: new Date().toISOString(),
        };
      }
      return complaint;
    });
    setComplaints(updatedComplaints);
  };

  const unresolvedComplaints = complaints.filter((complaint) => !complaint.resolved);

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
              <p><b>Created at: </b>{complaint.createdAt}</p>
              <p><b>Likes: </b>{complaint.likes}</p>
              <p><b>Dislike: </b>{complaint.dislikes}</p>
              {complaint.image && <img src={complaint.image} alt="Complaint" style={{ maxWidth: '300px' }} />}
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

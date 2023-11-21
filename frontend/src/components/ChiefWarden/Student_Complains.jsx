import React, { useState } from 'react';

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
    resolvedAt: null,
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

  return (
    <div>
      <h2>Complaints</h2>
      <ul>
        {complaints.map((complaint) => (
          <li key={complaint._id}>
          {!complaint.resolved && (<>
            <h3>{complaint.title}</h3>
            <p>{complaint.description}</p>
            <p>Created at: {complaint.createdAt}</p>
            <p>Likes: {complaint.likes}</p>
            <p>Dislikes: {complaint.dislikes}</p>
            {complaint.image && <img src={complaint.image} alt="Complaint" style={{ maxWidth: '300px' }} />}
              <button onClick={() => resolveComplaint(complaint._id)}>
                Resolve
              </button>
                </>
                )}
                </li>
        ))}
      </ul>
    </div>
  );
};

export default Chief_Student_complaints;

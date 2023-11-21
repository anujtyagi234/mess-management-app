import React from 'react';

const dummyResolvedComplaints = [
  {
    _id: 1,
    user: 'abcd',
    title: 'Slow Internet Speed',
    description: 'Experiencing very slow internet speed during peak hours.',
    image: 'https://via.placeholder.com/150',
    resolved: true,
    createdAt: new Date().toISOString(),
    resolvedAt: new Date().toISOString(),
    likes: 5,
    dislikes: 1,
  },
];

function ResolvedComplain() {
  return (
    <div>
      <h1>Resolved Complaints Panel</h1>
      <ul>
        {dummyResolvedComplaints.map((complaint) => (
          <li key={complaint._id}>
            <h3>{complaint.title}</h3>
            <p>{complaint.description}</p>
            <p>Created At: {complaint.createdAt}</p>
            <p>Resolved At: {complaint.resolvedAt}</p>
            <p>Likes: {complaint.likes}</p>
            <p>Dislikes: {complaint.dislikes}</p>
            {complaint.image && <img src={complaint.image} alt="Complaint" style={{ maxWidth: '300px' }} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResolvedComplain;

import React, { useState, useEffect } from 'react';
import '../../ChiefWarden/Common.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const Student_complaints = () => {
    const [complaints, setComplaints] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.get('http://localhost:3000/api/fetchcomplaints', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            const { complaints: fetchedComplaints } = response.data;
            setComplaints(fetchedComplaints);
        })
        .catch((error) => {
            console.error('Error fetching complaints:', error);
        });
    }, [token]);

    const handleLike = (complaintId) => {
        axios.put(`http://localhost:3000/api/${complaintId}/liked`, null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            const updatedComplaint = response.data;
            setComplaints((prevComplaints) =>
                prevComplaints.map((complaint) =>
                    complaint._id === updatedComplaint._id ? updatedComplaint : complaint
                )
            );
            toast('Thanks for voting!');
        })
        .catch((error) => {
            console.error('Error resolving complaint:', error);
        });
    };

    const handleDislike = (complaintId) => {
        axios.put(`http://localhost:3000/api/${complaintId}/disliked`, null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            const updatedComplaint = response.data;
            setComplaints((prevComplaints) =>
                prevComplaints.map((complaint) =>
                    complaint._id === updatedComplaint._id ? updatedComplaint : complaint
                )
            );
            toast('Thanks for voting!');
        })
        .catch((error) => {
            console.error('Error resolving complaint:', error);
        });
    };

    const unresolvedComplaints = Array.isArray(complaints)
        ? complaints.filter((complaint) => !complaint.resolved)
        : [];

    return (
        <div className='Maincontainer' style={{ fontFamily: 'Agbalumo' }}>
            <div className="comlainheading" style={{ fontFamily: 'Agbalumo' }}>
                <span>
                    <h2 style={{ fontSize: '1.5rem', marginTop: '1.1rem', fontWeight: 'bold' }}>
                        <b><span>Students Complaints </span></b>
                    </h2>
                </span>
            </div>
            <div className="deatailas_complain" style={{ fontFamily: 'Agbalumo' }}>
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

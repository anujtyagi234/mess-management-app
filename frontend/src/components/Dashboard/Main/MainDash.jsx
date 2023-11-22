import React, { useState, useEffect } from "react";
import "./MainDash.css";

function MainDash() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve token from local storage
    const token = localStorage.getItem('token');

    // Fetch user data from the server
    fetchUserData(token);
  }, []); // Fetch data on component mount

  const fetchUserData = (token) => {
    fetch('http://localhost:3000/api/auth/user', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(userData => {
      // Set the received user data to state
      setUserData(userData);
    })
    .catch(error => {
      // Handle error
      console.error('There was a problem with the request:', error);
    });
  };

  return (
    <div className="Container_Main">
      <div className="MainDash">
        {userData ? (
          <div className="text-left mx-20">
            <h1 className="DashboardText text-center">{userData.userrole} Details</h1>
            <p>Name: {userData.user_name}</p>
            <p>Registration NO: {userData.registration_no}</p>
			<p>Hostel Name: {userData.hostelname}</p>
			<p>Email: {userData.college_gmail_id}</p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
}

export default MainDash;

import React, { useState, useEffect } from "react";
// import './Common.css'
import Chief_Pro from "../../imgs/chief_Pro.avif"

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

  console.log(userData);
  return (
    <div className="Container_Main12">
      <div className="MainDash1234" style={{height:"90vh"}}>
        {userData ? (
           <div  className="Student_img" style={{display:"flex",flexDirection:"column"}}>
            
            <img src={Chief_Pro} alt=""  style={{marginBottom:"1.5rem",overflow:"hidden"}}/>
          
            
          <div className="Details_Students mx-20" style={{ fontFamily: 'Arial, sans-serif', padding: '20px', borderRadius: '8px', boxShadow: '7px 5px 5px black', background: 'linear-gradient(to right, pink, yellow, red)', border: '2px solid #333',display:"flex",flexDirection:"column",width:"550px"}}>
           
          <h1 className="DashboardText127 text-center" style={{ color: 'black', fontSize: '32px', marginBottom: '20px',backgroundColor:"transparent" }}>Chief-Warden Details</h1>
          <div className="main-box" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '15px', borderRadius: '8px', backgroundColor: '#fff', marginBottom: '15px', fontFamily:"Agbalumo" }}>
  
            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '5px', }}><b>Name: </b><span style={{ color: '#FF5733' }}>{userData.user_name}</span></p>
            {/* <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '5px', }}><b>Name: </b><span style={{ color: '#FF5733' }}>{userData.}</span></p> */}

            {/* <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '5px' }}><b>Registration no: </b> <span style={{ color: '#FF5733' }}>{userData.registration_no}</span></p> */}
          </div>
          <div className="main-box" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '15px', borderRadius: '8px', backgroundColor: '#fff', marginBottom: '15px',fontFamily:"Agbalumo" }}>
            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '5px' }}><b>User-name: </b> <span style={{ color: '#FF5733' }}>{userData.user_name}</span></p>
            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '5px' }}><b>Email: </b> <span style={{ color: '#FF5733' }}>{userData.college_gmail_id}</span></p>
          </div>
        </div>
        
        </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
}

export default MainDash;

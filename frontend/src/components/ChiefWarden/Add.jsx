// Add.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Add.css';

function Add() {
  const navigate = useNavigate();

  const initialInputData = {
    title: "",
    special: "",
    m1: "",
    m2: "",
    m3: "",
    m4: "",
    m5: ""
  };

  const [inputData, setinputData] = useState({ ...initialInputData });

  function handleSubmit(event) {
    event.preventDefault();
    const newData = { ...inputData, id: Date.now() };
    console.log('Submitting data:',inputData);

    axios.post('http://localhost:4000/Breakfast', inputData)
    .then(res => {
      console.log('Response:', res.data);
      alert("Data Added Successfully!");
      navigate('/');
      setinputData({ ...initialInputData });
    })
    .catch(err => {
      console.error('Error:', err);
      // Additional logging for response status and data
      console.log('Response Status:', err.response.status);
      console.log('Response Data:', err.response.data);
    });
  
  }

  return (
    <div className='container mt-5'>
      <div className="form-container">
        <h2>Mess Menu Form</h2>

        {/* <button onClick={() => navigate('/')}>Test Navigation</button> */}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" onChange={e => setinputData({ ...inputData, title: e.target.value })} value={inputData.title} />
          </div>

          <div className="form-group">
            <label htmlFor="special">Special:</label>
            <input type="text" id="special" name="special" onChange={e => setinputData({ ...inputData, special: e.target.value })} value={inputData.special} />
          </div>
          <div className="form-group">
            <label htmlFor="m1">m1:</label>
            <input type="text" id="m1" name="m1" onChange={e => setinputData({ ...inputData, m1: e.target.value })} value={inputData.m1} />
          </div>
          <div className="form-group">
            <label htmlFor="m2">m2:</label>
            <input type="text" id="m2" name="m2" onChange={e => setinputData({ ...inputData, m2: e.target.value })} value={inputData.m2} />
          </div>
          <div className="form-group">
            <label htmlFor="m3">m3:</label>
            <input type="text" id="m3" name="m3" onChange={e => setinputData({ ...inputData, m3: e.target.value })} value={inputData.m3} />
          </div>
          <div className="form-group">
            <label htmlFor="m4">m4:</label>
            <input type="text" id="m4" name="m4" onChange={e => setinputData({ ...inputData, m4: e.target.value })} value={inputData.m4} />
          </div>
          <div className="form-group">
            <label htmlFor="m5">m5:</label>
            <input type="text" id="m5" name="m5" onChange={e => setinputData({ ...inputData, m5: e.target.value })} value={inputData.m5} />
          </div>
          <button type="submit" className='Submitbtn'>
  Submit
</button>



 
        </form>
      </div>
    </div>
  );
}

export default Add;







// {
//   "/Lunch": "/Lunch",
//   "/Breakfast": "/Breakfast",
//   "/Dinner": "/Dinner",
//   "/Supper": "/Supper"
// }

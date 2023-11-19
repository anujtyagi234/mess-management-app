// Temp1.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Temp1.css';

function Temp1() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/Breakfast',{ withCredentials: true }).then((res) => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);

  return (
    <div className='container mt-5'>
      <div className="text-end">
        <Link to='/create' className='btn btn-primary'>
          <button className="custom-button">
            Add+
          </button>
        </Link>
      </div>
      <table className='custom-table'>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.title}</td>
              <td>{d.special}</td>
              <td>{d.m1}</td>
              <td>{d.m2}</td>
              <td>{d.m3}</td>
              <td>{d.m4}</td>
              <td>Up/Del</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Temp1;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Temp1.css'; 

const Temp1 = () => {
  const [empdata, empdataChange] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:4000/Breakfast')
      .then((res) => res.json())
      .then((resp) => {
        empdataChange(resp);
      })
      .catch((err) => {
        console.error(err.message || err.response || err);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-4">Menu List</h2>
        <div className='mb-4'>
          <Link to='/create' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
            Add+
          </Link>
        </div>
        <table className="table-auto w-full">
          <thead className='bg-gray-800 text-white'>
            <tr>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Special</th>
              <th className="border px-4 py-2">m1</th>
              <th className="border px-4 py-2">m2</th>
              <th className="border px-4 py-2">m3</th>
              <th className="border px-4 py-2">m4</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {empdata &&
              empdata.map(item => (
                <tr key={item.title}>
                  <td className="border px-4 py-2">{item.title}</td>
                  <td className="border px-4 py-2">{item.special}</td>
                  <td className="border px-4 py-2">{item.m1}</td>
                  <td className="border px-4 py-2">{item.m2}</td>
                  <td className="border px-4 py-2">{item.m3}</td>
                  <td className="border px-4 py-2">{item.m4}</td>
                  <td className="border px-4 py-2">
                    <Link to={`/edit/${item.title}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2'>
                      Edit
                    </Link>
                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2'>Remove</button>
                    <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded'>Details</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Temp1;

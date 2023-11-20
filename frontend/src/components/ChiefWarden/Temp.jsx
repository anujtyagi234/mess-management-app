import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

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
    <div className="container">
      <div className="card">
        <div className="card-title ">
          <h2>Menu List</h2>
          <div className="card-body ">
            <div className='divbtn'>
              <Link to='/create' className='btn btn-success'>
                Add+
              </Link>
            </div>
            <table className="table table-bordered ">
              <thead className='bg-dark text-white'>
                <tr>
                  <td>Title</td>
                  <td>special</td>
                  <td>m1</td>
                  <td>m2</td>
                  <td>m3</td>
                  <td>m4</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {empdata &&
                  empdata.map(item => (
                    <tr key={item.title}>
                      <td>{item.title}</td>
                      <td>{item.special}</td>
                      <td>{item.m1}</td>
                      <td>{item.m2}</td>
                      <td>{item.m3}</td>
                      <td>{item.m4}</td>
                      <td>
                        <Link to={`/edit/${item.title}`} className='btn btn-success'>
                          Edit
                        </Link>
                        <button className='btn btn-danger'>Remove</button>
                        <button className='btn btn-primary'>Details</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp1;


















































// {
//   "Breakfast": [
//     {
//       "title": "Monday",
//       "special": "",
//       "m1": "Sprouts moong_dal,gram",
//       "m2": "Idle-Sambhar",
//       "m3": "Milk-Bournvita",
//       "m4": "Banana"
//     },
//     {
//       "title": "Tuesday",
//       "special": "",
//       "m1": "Sprouts moong_dal,gram",
//       "m2": "Aloo-Paratha,Sauce/Achar",
//       "m3": "Chai",
//       "m4": "Banana"
//     },
//     {
//       "title": "Wednesday",
//       "special": "",
//       "m1": "Sprouts moong_dal,gram",
//       "m2": "Sambhar-Bda/Bread-Butter",
//       "m3": "Milk",
//       "m4": "Banana"
//     },
//     {
//       "title": "Thursday",
//       "special": "",
//       "m1": "Sprouts moong_dal,gram",
//       "m2": "Paneer-Paratha,Sauce/Achar",
//       "m3": "Coffe",
//       "m4": "Banana"
//     },
//     {
//       "title": "Friday",
//       "special": "",
//       "m1": "Sprouts moong_dal,gram",
//       "m2": "Sambhar-vda/Khasta-pure,Sabje",
//       "m3": "Milk,Coffe",
//       "m4": "Banana"
//     },
//     {
//       "title": "Saturday",
//       "special": "",
//       "m1": "Sprouts moong_dal,gram",
//       "m2": "Chola-Samosha",
//       "m3": "Chai/Cofee",
//       "m4": "Banana"
//     },
//     {
//       "title": "Sunday",
//       "special": "",
//       "m1": "Sprouts moong_dal,gram",
//       "m2": "Poha-Jalebi",
//       "m3": "Milk",
//       "m4": "Banana"
//     }
//   ],
//   "Lunch": [
//     {
//       "special": "",
//       "title": "Monday",
//       "m1": "Matar-Paneer",
//       "m2": "",
//       "m3": "Roti-Rice",
//       "m4": "Rayta",
//       "m5": "Salad"
//     },
//     {
//       "title": "Tuesday",
//       "special": "",
//       "m1": "Mixveg",
//       "m2": "Chna-Dal",
//       "m3": "Roti-Rice",
//       "m4": "Salad",
//       "m5": "Dahi"
//     },
//     {
//       "title": "Wednesday",
//       "special": "",
//       "m1": "Bhindi-Pyaja",
//       "m2": "Kali-Massor-Dal",
//       "m3": "Roti-Rice",
//       "m4": "Salad",
//       "m5": "Boondi-Rayta"
//     },
//     {
//       "title": "Thursday",
//       "special": "",
//       "m1": "Kadhe",
//       "m2": "Aloo-Matar",
//       "m3": "Roti-Rice",
//       "m4": "Salad"
//     },
//     {
//       "title": "Friday",
//       "special": "",
//       "m1": "Mix-veg(Paneer)",
//       "m2": "Kali-Masoor",
//       "m3": "Roti-Rice",
//       "m4": "Salad",
//       "m5": "Dahi"
//     },
//     {
//       "title": "Saturday",
//       "special": "Gulab-Jamun",
//       "m1": "Kadhai-Paneer",
//       "m2": "",
//       "m3": "Roti-Rice",
//       "m4": "Salad"
//     },
//     {
//       "title": "Sunday",
//       "special": "",
//       "m1": "Chole-Bhature",
//       "m2": "Mithi-Chatne",
//       "m3": "",
//       "m4": "Salad",
//       "m5": "Pyaj-Rayta"
//     }
//   ],
//   "Dinner": [
//     {
//       "special": "Gulab-Jamun",
//       "title": "Monday",
//       "m1": "Aloo-Bhujiya",
//       "m2": "Rajma",
//       "m3": "Roti-Rice",
//       "m4": "Salad",
//       "m5": ""
//     },
//     {
//       "title": "Tuesday",
//       "special": "Fruit-Cream",
//       "m1": "Sahi-Panner",
//       "m2": "",
//       "m3": "Roti-Rice",
//       "m4": "Salad",
//       "m5": ""
//     },
//     {
//       "title": "Wednesday",
//       "special": "Fruit-Cream",
//       "m1": "Panner-Bhurji",
//       "m2": "Daal",
//       "m3": "Roti-Rice",
//       "m4": "Salad",
//       "m5": ""
//     },
//     {
//       "title": "Thursday",
//       "special": "Kheer",
//       "m1": "SoyabeenAloo",
//       "m2": "Arhar-Daal",
//       "m3": "Roti-Rice",
//       "m4": "Salad",
//       "m5": ""
//     },
//     {
//       "title": "Friday",
//       "special": "Rabdi",
//       "m1": "Bhindi-Pyaja",
//       "m2": "Chana-Daal",
//       "m3": "Roti-Rice",
//       "m4": "Salad",
//       "m5": ""
//     },
//     {
//       "title": "Saturday",
//       "special": "",
//       "m1": "VegBiryani",
//       "m2": "Green-Chatni",
//       "m3": "Papad",
//       "m4": "Salad",
//       "m5": "Rayta"
//     },
//     {
//       "title": "Sunday",
//       "special": "Icecream",
//       "m1": "Litti-Chokha",
//       "m2": "Daal",
//       "m3": "Chatni/Achar",
//       "m4": "Salad",
//       "m5": ""
//     }
//   ],
//   "Supper": [
//     {
//       "title": "Monday",
//       "special": "",
//       "m1": "Samosha-chai,Chatni",
//       "m2": "Chai"
//     },
//     {
//       "title": "Tuesday",
//       "special": "",
//       "m1": "Maggi/Chowmeen-sauce",
//       "m2": "Milk"
//     },
//     {
//       "title": "Wednesday",
//       "special": "",
//       "m1": "Sandwich-Sauce/Cuttlet",
//       "m2": "Coffe"
//     },
//     {
//       "title": "Thursday",
//       "special": "",
//       "m1": "Fruit-Salad",
//       "m2": "Hot-Bournvita"
//     },
//     {
//       "title": "Friday",
//       "special": "",
//       "m1": "Aloo-Pyaj-pakode",
//       "m2": "Chai"
//     },
//     {
//       "title": "Saturday",
//       "special": "",
//       "m1": "Holiday...",
//       "m2": ""
//     },
//     {
//       "title": "Sunday",
//       "special": "",
//       "m1": "Mathari/Bread-Pakode-Sauce",
//       "m2": "Bournvita/Milk"
//     }
//   ]
// }


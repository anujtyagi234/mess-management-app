// EmpListing.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const EmpListing = ({ selectedMenu, onMenuChange }) => {
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();
  const LoadEdit = (id) => {
    navigate(`/employee/edit/${selectedMenu}/${id}`);
  };

  useEffect(() => {
    console.log("SeelctedMenu", selectedMenu)
    fetch(`http://localhost:8000/${selectedMenu}`)
      .then((res) => res.json())
      .then((resp) => {
        console.log("resp", resp)
        empdatachange(resp);
        console.log("empdata", empdata)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [selectedMenu]);

  return (
    <div className="container" >
      <div className="card">
        <div className="card-title">
          <h2><b><big> Mess Menu Chart</big></b></h2>
        </div>
        <div className="dropdown mb-3">
          <label htmlFor="menuDropdown" className="form-label">
            <span><b>-: Select Menu Type :-</b></span>
          </label>
          <select
          
            id="menuDropdown"
            className="form-select"
            value={selectedMenu}
            onChange={(e) => {
              onMenuChange(e.target.value);
            }}


            style={{
                backgroundColor: 'grey',  // Set your background color
                color: 'white',           // Set your text color
                borderRadius: '8px',
                boxShadow:"2px 2px 2px  red"        // Set your border radius
                // Add more styles as needed
              }}
          >
            <option value="Breakfast" >Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Supper">Supper</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>
        <table className="table table-bordered table-hover">
          <thead className="bg-dark text-white">
            <tr>
              <th scope="col" className="bg-danger"><b>ID</b></th>
              <th scope="col" className="bg-warning" ><b>Title</b></th>
              <th scope="col" className="bg-info"><b>Special</b></th>
              <th scope="col" className="bg-info"><b>M1</b></th>
              <th scope="col" className="bg-info"><b>M2</b></th>
              <th scope="col" className="bg-info"><b>M3</b></th>
              <th scope="col" className="bg-info"><b>M4</b></th>
              <th scope="col" className="bg-danger"><b>Action</b></th>
            </tr>
          </thead>
          <tbody>
            {empdata &&
              empdata.map((item) => (
                <tr key={item.id} className="border-dark">
                  <td  >{item.id}</td>
                  <td >{item.title}</td>
                  <td >{item.special}</td>
                  <td >{item.m1}</td>
                  <td>{item.m2}</td>
                  <td>{item.m3}</td>
                  <td>{item.m4}</td>
                  <td>
                    <Link
                      to={`/employee/edit/${selectedMenu}/${item.id}`}
                      className="btn btn-success btn-sm"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmpListing;





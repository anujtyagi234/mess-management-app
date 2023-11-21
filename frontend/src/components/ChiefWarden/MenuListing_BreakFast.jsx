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
    console.log("SelectedMenu", selectedMenu)
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
    <div className="container mx-auto">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Mess Menu Chart</h2>
        <div className="mb-4">
          <label htmlFor="menuDropdown" className="block text-gray-700 font-bold mb-2">
            -: Select Menu Type :-
          </label>
          <select
            id="menuDropdown"
            className="form-select"
            value={selectedMenu}
            onChange={(e) => {
              onMenuChange(e.target.value);
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





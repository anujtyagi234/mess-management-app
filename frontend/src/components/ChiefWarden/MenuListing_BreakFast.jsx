import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="container mx-auto">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Mess Menu Chart</h2>
        <div className="mb-4">
          <label htmlFor="menuDropdown" className="block text-gray-700 font-bold mb-2">
            -: Select Menu Type :-
          </label>
          <select
            id="menuDropdown"
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
        <table className="table-auto w-full">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2 bg-red-500"><b>ID</b></th>
              <th className="px-4 py-2 bg-yellow-500"><b>Title</b></th>
              <th className="px-4 py-2 bg-blue-500"><b>Special</b></th>
              <th className="px-4 py-2 bg-blue-500"><b>M1</b></th>
              <th className="px-4 py-2 bg-blue-500"><b>M2</b></th>
              <th className="px-4 py-2 bg-blue-500"><b>M3</b></th>
              <th className="px-4 py-2 bg-blue-500"><b>M4</b></th>
              <th className="px-4 py-2 bg-red-500"><b>Action</b></th>
            </tr>
          </thead>
          <tbody>
            {(Array.isArray(empdata) && empdata.length > 0) &&
              empdata.map((item) => (
                <tr key={item.id} className="border border-black">
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2">{item.title}</td>
                  <td className="px-4 py-2">{item.special}</td>
                  <td className="px-4 py-2">{item.m1}</td>
                  <td className="px-4 py-2">{item.m2}</td>
                  <td className="px-4 py-2">{item.m3}</td>
                  <td className="px-4 py-2">{item.m4}</td>
                  <td className="px-4 py-2">
                    <Link
                      to={`/employee/edit/${selectedMenu}/${item.id}`}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
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
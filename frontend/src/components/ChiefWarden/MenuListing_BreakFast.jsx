// EmpListing.js

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Hostels = [
  "SwamiViveka Nand Boys Hostel(SVBH)",
  "Bal Gangadhar Tilak Hostel(Tilak Hostel)",
  "Sardar Ballabh Bhai Patel Hostel(Patel Hostel)",
  "Ravindra Nath Taigore Hostel(Taigore Hostel)",
  "Diamond Jublee Girls Hostel(DG)",
];

const EmpListing = () => {
  const [empdata, setEmpData] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState("Breakfast");
  const [selectedHostel, setSelectedHostel] = useState(Hostels[0]); // Set the default hostel
  const navigate = useNavigate();

  const LoadEdit = (id) => {
    navigate(`/employee/edit/${selectedMenu}/${id}`);
  };

  useEffect(() => {
    // Fetch the list of hostels
    axios
      .get("http://localhost:8000/hostels")
      .then((resp) => {
        setHostels(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    // Fetch the mess menu based on selected menu and hostel
    axios
      .get(`http://localhost:8000/${selectedMenu}/${selectedHostel}`)
      .then((resp) => {
        setEmpData(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [selectedMenu, selectedHostel]);

  const handleEdit = async (id) => {
    const updatedMenu = prompt("Enter updated menu (JSON format):");
    try {
      await axios.put(
        `http://localhost:8000/${selectedMenu}/${selectedHostel}/${id}`,
        JSON.parse(updatedMenu)
      );
      const updatedData = await axios.get(`http://localhost:8000/${selectedMenu}/${selectedHostel}`);
      setEmpData(updatedData.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container23 mx-auto" style={{ fontFamily: "Agbalumo" }}>
      <div className="bg-white rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Mess Menu Chart</h2>
        <div className="mb-4">
          <label htmlFor="hostelDropdown" className="block text-gray-700 font-bold mb-2">
            Select Hostel:
          </label>
          <select
            id="hostelDropdown"
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={selectedHostel}
            onChange={(e) => setSelectedHostel(e.target.value)}
          >
            {Hostels.map((hostel) => (
              <option key={hostel} value={hostel}>
                {hostel}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="menuDropdown" className="block text-gray-700 font-bold mb-2">
            Select Menu Type:
          </label>
          <select
            id="menuDropdown"
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={selectedMenu}
            onChange={(e) => setSelectedMenu(e.target.value)}
          >
            <option value="Breakfast">Breakfast</option>
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
            {empdata.map((item) => (
              <tr key={item.id} className="border border-black">
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.title}</td>
                <td className="px-4 py-2">{item.special}</td>
                <td className="px-4 py-2">{item.m1}</td>
                <td className="px-4 py-2">{item.m2}</td>
                <td className="px-4 py-2">{item.m3}</td>
                <td className="px-4 py-2">{item.m4}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Edit
                  </button>
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

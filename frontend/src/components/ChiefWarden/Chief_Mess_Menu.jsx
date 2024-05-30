// Import necessary libraries and components
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./Chief_Mess_menu.css";
import Menu from "../../imgs/ramen.gif";
import axios from "axios";

// Define constants
const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Hostels = [
  "SwamiViveka Nand Boys Hostel(SVBH)",
  "Bal Gangadhar Tilak Hostel(Tilak Hostel)",
  "Sardar Ballabh Bhai Patel Hostel(Patel Hostel)",
  "Ravindra Nath Taigore Hostel(Taigore Hostel)",
  "Diamond Jublee Girls Hostel(DG)",
];

// Set the root element for accessibility
Modal.setAppElement("#root");

function MealPlanner() {
  const [selectedHostel, setSelectedHostel] = useState(
    "SwamiViveka Nand Boys Hostel(SVBH)"
  );
  const [mealData, setMealData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [editedValues, setEditedValues] = useState({
    m1: "",
    m2: "",
    m3: "",
    m4: "",
    special: "",
  });

  // Fetch data on component mount and when selectedHostel changes
  useEffect(() => {
    fetchData(selectedHostel);
  }, [selectedHostel, mealData]);

  // Function to fetch meal data
  const fetchData = async (hostel) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/messMenu/fetch1",
        {
          params: { hostel: hostel },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { messMenu } = response.data;
      setMealData(messMenu);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle opening the edit modal
  const handleEditMenu = (day, mealType) => {
    setEditModalIsOpen(true);
    // Optionally, you can pre-fill the edited values based on existing data
    const selectedMealData = mealData[0]?.[mealType]?.find(
      (item) => item.day === day
    );
    setEditedValues({
      day: day,
      mealType: mealType,
      m1: selectedMealData?.m1 || "",
      m2: selectedMealData?.m2 || "",
      m3: selectedMealData?.m3 || "",
      m4: selectedMealData?.m4 || "",
      special: selectedMealData?.special || "",
    });
  };

  const token = localStorage.getItem("token");

  // Function to handle saving edited values
  const handleSaveEdit = async () => {
    try {
      const { m1, m2, m3, m4, special, mealType, day } = editedValues;
      const hostel = selectedHostel;
      const response = await axios.put(
        "http://localhost:3000/messMenu/update",
        { m1, m2, m3, m4, special, mealType, day, hostel },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { updatedMenu } = response.data;
      setMealData(updatedMenu);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
    setEditModalIsOpen(false);
  };

  // console.log(mealData);

  // Function to render the meal plan chart
  const renderMealPlanChart = () => {
    return (
      <table className="table-auto w-full border-collapse border border-black mt-4">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="border border-black p-2">Day</th>
            <th className="border border-black p-2">Breakfast</th>
            <th className="border border-black p-2">Lunch</th>
            <th className="border border-black p-2">Supper</th>
            <th className="border border-black p-2">Dinner</th>
          </tr>
        </thead>
        <tbody>
          {DAYS_OF_WEEK.map((day) => (
            <tr key={day}>
              <td className="border border-black p-2">{day}</td>
              <td className="border border-black p-2">
                {renderMealPlan(day, "breakfast")}
              </td>
              <td className="border border-black p-2">
                {renderMealPlan(day, "lunch")}
              </td>
              <td className="border border-black p-2">
                {renderMealPlan(day, "supper")}
              </td>
              <td className="border border-black p-2">
                {renderMealPlan(day, "dinner")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  // Function to render the meal plan for a specific day and meal type
  const renderMealPlan = (day, mealType) => {
    const selectedMealData =
      mealData && mealData.length > 0
        ? mealData[0]?.[mealType]?.find((item) => item.day === day)
        : null;
       
    return (
      <div>
        <p>{selectedMealData?.special}</p>
        <p>{selectedMealData?.m1}</p>
        <p>{selectedMealData?.m2}</p>
        <p>{selectedMealData?.m3}</p>
        <p>{selectedMealData?.m4}</p>

        {/* Edit button */}
        <button
          onClick={() => handleEditMenu(day, mealType)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          Edit
        </button>
      </div>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="Mess_menu_parent_container" style={{ background: "white" }}>
      <div className="Mess_container">
        <div className="MessMenu_header">
          <div className="boxer" style={{ height: "5%", width: "5%" }}>
            <img src={Menu} alt="" style={{ borderRadius: "0" }} />
          </div>
          <h1 className="Mess_Menu_heading">Weekly Mess Menu</h1>
          <div className="boxer" style={{ height: "5%", width: "5%" }}>
            <img src={Menu} alt="" style={{ borderRadius: "0" }} />
          </div>
        </div>
        <div className="Dropdown" style={{ fontFamily: "Agbalumo" }}>
          <div className="select_menu" style={{ fontFamily: "Agbalumo" }}>
            <select
              className="Select_box"
              style={{ fontFamily: "Agbalumo" }}
              id="hostel"
              onChange={(e) => setSelectedHostel(e.target.value)}
              value={selectedHostel}
            >
              {Hostels.map((hostel) => (
                <option key={hostel} value={hostel}>
                  {hostel}
                </option>
              ))}
            </select>
          </div>
        </div>

        {renderMealPlanChart()}
      </div>

      {/* Edit Modal */}
      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={() => setEditModalIsOpen(false)}
        className="Modal bg-white rounded-md p-6 max-w-sm mx-auto"
        overlayClassName="Overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
      >

        
        <h2 className="text-xl font-bold mb-4">Edit Menu</h2>
        <label className="block mb-2">
          M1:
          <input
            type="text"
            value={editedValues.m1}
            onChange={(e) =>
              setEditedValues({ ...editedValues, m1: e.target.value })
            }
            className="border border-gray-300 rounded-md p-1 w-full"
          />
        </label>
        <label className="block mb-2">
          M2:
          <input
            type="text"
            value={editedValues.m2}
            onChange={(e) =>
              setEditedValues({ ...editedValues, m2: e.target.value })
            }
            className="border border-gray-300 rounded-md p-1 w-full"
          />
        </label>
        <label className="block mb-2">
          M3:
          <input
            type="text"
            value={editedValues.m3}
            onChange={(e) =>
              setEditedValues({ ...editedValues, m3: e.target.value })
            }
            className="border border-gray-300 rounded-md p-1 w-full"
          />
        </label>
        <label className="block mb-2">
          M4:
          <input
            type="text"
            value={editedValues.m4}
            onChange={(e) =>
              setEditedValues({ ...editedValues, m4: e.target.value })
            }
            className="border border-gray-300 rounded-md p-1 w-full"
          />
        </label>
        <label className="block mb-2">
          Special:
          <input
            type="text"
            value={editedValues.special}
            onChange={(e) =>
              setEditedValues({ ...editedValues, special: e.target.value })
            }
            className="border border-gray-300 rounded-md p-1 w-full"
          />
        </label>
        <button
          onClick={handleSaveEdit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </Modal>
    </div>
  );
}

export default MealPlanner;

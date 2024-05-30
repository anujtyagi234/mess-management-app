import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "../ChiefWarden/Chief_Mess_menu.css";
import Menu from "../../imgs/ramen.gif";
import axios from "axios";

const MONTHS_OF_YEAR = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Hostels = [
  "Swami Vivekanand Boys Hostel(SVBH)",
  "Bal Gangadhar Tilak Hostel(Tilak Hostel)",
  "Sardar Vallabhbhai Patel Hostel(Patel Hostel)",
  "Ravindranath Tagore Hostel(Tagore Hostel)",
  "Diamond Jubilee Girls Hostel(DG)",
  "Ravindra Nath Taigore Hostel(Taigore Hostel)"
];

Modal.setAppElement("#root");

function ExpensePlanner() {
  const [selectedHostel, setSelectedHostel] = useState("Swami Vivekanand Boys Hostel(SVBH)");
  const [expenseData, setExpenseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [editedValues, setEditedValues] = useState({
    vegetables: "",
    fruits: "",
    provisions: "",
    others: "",
  });


  useEffect(() => {
    fetchData(selectedHostel);
  }, [selectedHostel]);

  const fetchData = async (hostel) => {
    try {
     
      const response = await axios.get("http://localhost:3000/messExpense/fetch1", {
        params: { hostel: hostel },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Backend response:", response.data); // Debug: Check backend response
      const { messExpense } = response.data;
      console.log("Parsed expense data:", messExpense); // Debug: Check parsed data
      setExpenseData(messExpense);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditExpense = (month, expenseType) => {
    setEditModalIsOpen(true);
    const selectedExpenseData = expenseData?.[expenseType]?.find((item) => item.month === month);
    setEditedValues({
      month:month,
      expenseType:expenseType,
      vegetables: selectedExpenseData?.vegetables || "",
      fruits: selectedExpenseData?.fruits || "",
      provisions: selectedExpenseData?.provisions || "",
      others: selectedExpenseData?.others || "",
    });
  };



  const token = localStorage.getItem("token");
  const handleSaveEdit = async () => {
    try {
      
      const { vegetables, fruits, provisions, others, expenseType, month } = editedValues;
      const hostel = selectedHostel;
      const response = await axios.put("http://localhost:3000/messExpense/update", 
        { vegetables, fruits, provisions, others, expenseType, month, hostel },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Update response:", response.data); // Debug: Check update response
      const { updatedExpense } = response.data;
      setExpenseData(updatedExpense);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      setEditModalIsOpen(false);
    }
  };

  const renderExpensePlanChart = () => {
    return (
      <table className="table-auto w-full border-collapse border border-black mt-4">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="border border-black p-2">Months</th>
            <th className="border border-black p-2">Week 1</th>
            <th className="border border-black p-2">Week 2</th>
            <th className="border border-black p-2">Week 3</th>
            <th className="border border-black p-2">Week 4</th>
            <th className="border border-black p-2">Extras</th>
          </tr>
        </thead>
        <tbody>
          {MONTHS_OF_YEAR.map((month) => (
            <tr key={month}>
              <td className="border border-black p-2">{month}</td>
              <td className="border border-black p-2">{renderExpensePlan(month, "week1")}</td>
              <td className="border border-black p-2">{renderExpensePlan(month, "week2")}</td>
              <td className="border border-black p-2">{renderExpensePlan(month, "week3")}</td>
              <td className="border border-black p-2">{renderExpensePlan(month, "week4")}</td>
              <td className="border border-black p-2">{renderExpensePlan(month, "extras")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderExpensePlan = (month, expenseType) => {
    const selectedExpenseData = expenseData && expenseData.length > 0 ? expenseData[0]?.[expenseType]?.find((item) => item.month === month) : null;

    console.log("Rendering expense plan for:", month, expenseType, selectedExpenseData); // Debug: Check selected expense data

    return (
      <div>
        <p>{selectedExpenseData?.vegetables}</p>
        <p>{selectedExpenseData?.fruits}</p>
        <p>{selectedExpenseData?.provisions}</p>
        <p>{selectedExpenseData?.others}</p>
        <button
          onClick={() => handleEditExpense(month, expenseType)}
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
          <h1 className="Mess_Menu_heading">Monthly Mess Expenses</h1>
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
        {renderExpensePlanChart()}
      </div>
      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={() => setEditModalIsOpen(false)}
        className="Modal bg-white rounded-md p-6 max-w-sm mx-auto"
        overlayClassName="Overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-xl font-bold mb-4">Edit Expenses</h2>
        <label className="block mb-2">
          Vegetables:
          <input
            type="text"
            value={editedValues.vegetables}
            onChange={(e) =>
              setEditedValues({ ...editedValues, vegetables: e.target.value })
            }
            className="border border-gray-300 rounded-md p-1 w-full"
          />
        </label>
        <label className="block mb-2">
          Fruits:
          <input
            type="text"
            value={editedValues.fruits}
            onChange={(e) =>
              setEditedValues({ ...editedValues, fruits: e.target.value })
            }
            className="border border-gray-300 rounded-md p-1 w-full"
          />
        </label>
        <label className="block mb-2">
          Provisions:
          <input
            type="text"
            value={editedValues.provisions}
            onChange={(e) =>
              setEditedValues({ ...editedValues, provisions: e.target.value })
            }
            className="border border-gray-300 rounded-md p-1 w-full"
          />
        </label>
        <label className="block mb-2">
          Others:
          <input
            type="text"
            value={editedValues.others}
            onChange={(e) =>
              setEditedValues({ ...editedValues, others: e.target.value })
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

export default ExpensePlanner;

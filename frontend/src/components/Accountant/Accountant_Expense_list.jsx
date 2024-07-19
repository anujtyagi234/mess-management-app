import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "../ChiefWarden/Chief_Mess_Menu.css";
import Menu from "../../imgs/ramen.gif";
import axios from "axios";
import { toast } from 'react-toastify';


const Years = [
  new Date().getFullYear(),
  new Date().getFullYear() - 1,
  new Date().getFullYear() - 2,
  new Date().getFullYear() - 3,
];

Modal.setAppElement("#root");

function ExpensePlanner() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
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
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchData(selectedYear);
  }, [selectedYear]);


  const fetchData = async (year) => {
    try {
      const response = await axios.get("http://localhost:3000/messExpense/fetch", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          year: year,
        },
      });

      const { expenses } = response.data;
      console.log("Fetched expenses:", expenses);
      setExpenseData(expenses);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditExpense = (month) => {
    setEditModalIsOpen(true);
    const selectedExpenseData =
      expenseData.find((item) => item.month === month).expenses;
      console.log("dummy",selectedExpenseData)
    setEditedValues({
      month: month,
      vegetables: selectedExpenseData.vegetables,
      fruits: selectedExpenseData.fruits,
      provisions: selectedExpenseData.provisions,
      others: selectedExpenseData.others,
    });


  };

  const handleSaveEdit = async () => {
    try {
      const { vegetables, fruits, provisions, others, month } = editedValues;
      console.log(editedValues);
      const response = await axios.put(
        "http://localhost:3000/messExpense/update",
        {
          vegetables,
          fruits,
          provisions,
          others,
          month,
          year: selectedYear,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      const { updatedExpense } = response.data;
      // Find the index of the edited month in the expenseData array
    const editedMonthIndex = expenseData.findIndex(item => item.month === month);

    // Update only the edited month in the expenseData array
    const updatedExpenseData = [...expenseData];
    updatedExpenseData[editedMonthIndex] = updatedExpense;
    setExpenseData(updatedExpenseData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      setEditModalIsOpen(false);
    }
    toast.success("Expense updated successfully")
  };

  const calculateTotal = (expense) => {
    const { vegetables, fruits, provisions, others } = expense;
    return vegetables + fruits + provisions + others;
  };

  const renderExpensePlanChart = () => {
    return (
      <table className="table-auto w-full border-collapse border border-black mt-4">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="border border-black p-2">Months</th>
            <th className="border border-black p-2">Vegetables</th>
            <th className="border border-black p-2">Fruits</th>
            <th className="border border-black p-2">Provisions</th>
            <th className="border border-black p-2">Others</th>
            <th className="border border-black p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {expenseData.map((expense, index) => (
            <tr key={index}>
              <td className="border border-black p-2">{expense.month}</td>
              <td className="border border-black p-2">{expense.expenses.vegetables}</td>
              <td className="border border-black p-2">{expense.expenses.fruits}</td>
              <td className="border border-black p-2">{expense.expenses.provisions}</td>
              <td className="border border-black p-2">{expense.expenses.others}</td>
              <td className="border border-black p-2">
                {calculateTotal(expense.expenses)}
                <button
                  onClick={() => handleEditExpense(expense.month)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-4"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
          <h1 className="Mess_Menu_heading">
          Monthly Mess Expenses
          </h1>
          <div className="boxer" style={{ height: "5%", width: "5%" }}>
            <img src={Menu}
 alt="" style={{ borderRadius: "0" }} />
 </div>
</div>
<div className="Dropdown" style={{ fontFamily: "Agbalumo" }}>
 <div className="select_menu" style={{ fontFamily: "Agbalumo" }}>
   <select
     className="Select_box"
     style={{ fontFamily: "Agbalumo" }}
     id="hostel"
     onChange={(e) => setSelectedYear(e.target.value)}
     value={selectedYear}
   >
     {Years.map((year) => (
       <option key={year} value={year}>
         {year}
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

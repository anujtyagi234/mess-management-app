import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Common2.css'
const ExpenseListing = ({ selectedExpense, onExpenseTypeChange }) => {
  const [expenseData, setExpenseData] = useState(null);
  const navigate = useNavigate();

  const loadEdit = (id) => {
    navigate(`/expense/edit/${selectedExpense}/${id}`);
  };

  useEffect(() => {
    fetch(`http://localhost:8000/${selectedExpense}`)
      .then((res) => res.json())
      .then((resp) => {
        setExpenseData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [selectedExpense]);

  return (
    <div className="container1 mx-auto" style={{fontFamily:"Agbalumo"}}>
      <div className="bg-white shadow-md rounded p-4 mb-4" style={{ boxShadow:"50px 5px 20px black"}} >
        <h2 className="text-2xl font-bold mb-4">Expense Chart</h2>
        <div className="mb-3">
          <label htmlFor="expenseDropdown" className="block font-bold mb-2">
            -: Select Expense Type :-
          </label>
          <select
            id="expenseDropdown"
            className="block w-full p-2 rounded bg-gray-600 text-white"
            value={selectedExpense}
            onChange={(e) => {
              onExpenseTypeChange(e.target.value);
            }}
          >
            <option value="Vegitable_Expence">Vegetable Expense</option>
            <option value="Worker_Expense">Worker Expense</option>
          </select>
        </div>
        <table className="w-full table-auto">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-2 bg-red-500"><b>ID</b></th>
              <th className="p-2 bg-yellow-500"><b>Title</b></th>
              <th className="p-2 bg-blue-500"><b>Expense</b></th>
              <th className="p-2 bg-red-500"><b>Action</b></th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(expenseData) &&
              expenseData.map((item) => (
                <tr key={item.id} className="border border-gray-300">
                  <td className="p-2">{item.id}</td>
                  <td className="p-2">{item.title}</td>
                  <td className="p-2">{item.Expence}</td>
                  <td className="p-2">
                    <Link
                      to={`/expense/edit/${selectedExpense}/${item.id}`}
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

export default ExpenseListing;

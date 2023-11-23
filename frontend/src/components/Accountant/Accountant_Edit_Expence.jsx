import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ExpenseEdit = () => {
  const { empid } = useParams();
  const [expenseData, setExpenseData] = useState({});
  const [expenseType, setExpenseType] = useState("Vegitable_Expence");
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8000/${expenseType}/${empid}`)
      .then((res) => res.json())
      .then((resp) => {
        setExpenseData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [empid, expenseType]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = { ...expenseData };
    fetch(`http://localhost:8000/${expenseType}/${empid}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleExpenseTypeChange = (e) => {
    setExpenseType(e.target.value);
  };
  const handleExpenseChange = (e) => {
    setExpenseData({ ...expenseData, Expence: e.target.value });
  };
  
  return (
    <div className="container mx-auto overflow-auto" style={{fontFamily:"Agbalumo"}}>
      <div className="bg-white shadow-md rounded p-8 mb-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Edit Expense Data</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="expenseTypeDropdown" className="block font-bold mb-2">
              Select Expense Type:
            </label>
            <select
              id="expenseTypeDropdown"
              value={expenseType}
              onChange={handleExpenseTypeChange}
              className="block w-full p-2 rounded bg-gray-200 border border-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="Vegetable_Expense">Vegetable Expense</option>
              <option value="Worker_Expense">Worker Expense</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-bold mb-2">ID</label>
              <input
                value={expenseData.id || ""}
                disabled
                className="block w-full bg-gray-200 border border-gray-200 text-gray-700 rounded py-2 px-4 mb-3"
              />
            </div>
            <div>
              <label className="block font-bold mb-2">Title</label>
              <input
                required
                value={expenseData.title || ""}
                onChange={(e) => setExpenseData({ ...expenseData, title: e.target.value })}
                className="block w-full bg-gray-200 border border-gray-200 text-gray-700 rounded py-2 px-4 mb-3"
              />
            </div>

<div className="grid grid-cols-2 gap-4">
  <div>
    <label className="block font-bold mb-2">Expense</label>
    <input
      value={expenseData.Expence || ""}
      onChange={handleExpenseChange}
      className="block w-full bg-gray-200 border border-gray-200 text-gray-700 rounded py-2 px-4 mb-3"
    />
  </div>
  <div>
    <label className="block font-bold mb-2">Is Active</label>
    <div className="form-check">
      <input
        checked={expenseData.isactive || false}
        onChange={handleExpenseChange}
        type="checkbox"
        className="form-check-input"
      />
      <label className="form-check-label">Is Active</label>
    </div>
  </div>
</div>


          </div>
          
          <div>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4" type="submit">
              Save
            </button>
            <Link to="/" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Back
            </Link>
          </div>
        </form>
        <p className="mt-4"><span className="font-bold">Note:</span> Change URL: expense/edit/X/y (X is expense-type, y is the id)</p>
      </div>
    </div>
  );
};

export default ExpenseEdit;

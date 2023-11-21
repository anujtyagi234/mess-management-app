
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpenseListing = ({ selectedExpense, onExpenseTypeChange }) => {
  const [expenseData, expencedatachange] = useState(null);
  const navigate = useNavigate();

  const loadEdit = (id) => {
    navigate(`/expense/edit/${selectedExpense}/${id}`);
  };

  useEffect(() => {
    console.log("SelectedExpenseType", selectedExpense);
    fetch(`http://localhost:8000/${selectedExpense}`)
      .then((res) => res.json())
      .then((resp) => {
        console.log("resp", resp);
        expencedatachange(resp);
        console.log("expenseData", expenseData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [selectedExpense]);

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>
            <b>
              <big> Expense Chart</big>
            </b>
          </h2>
        </div>
        <div className="dropdown mb-3">
          <label htmlFor="expenseDropdown" className="form-label">
            <span>
              <b>-: Select Expense Type :-</b>
            </span>
          </label>
          <select
            id="expenseDropdown"
            className="form-select"
            value={selectedExpense}
            onChange={(e) => {
              onExpenseTypeChange(e.target.value);
            }}
            style={{
              backgroundColor: 'grey',
              color: 'white',
              borderRadius: '8px',
              boxShadow: '2px 2px 2px red'
            }}
          >
            <option value="Vegetable_Expense">Vegetable Expense</option>
            <option value="Worker_Expense">Worker Expense</option>
          </select>
        </div>
        <table className="table table-bordered table-hover">
          <thead className="bg-dark text-white">
            <tr>
              <th scope="col" className="bg-danger">
                <b>ID</b>
              </th>
              <th scope="col" className="bg-warning">
                <b>Title</b>
              </th>
              <th scope="col" className="bg-info">
                <b>Expense</b>
              </th>
              <th scope="col" className="bg-danger">
                <b>Action</b>
              </th>
            </tr>
          </thead>
          <tbody>
            {expenseData &&
              expenseData.map((item) => (
                <tr key={item.id} className="border-dark">
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.Expence}</td>
                  <td>
                    <Link
                      to={`/expense/edit/${selectedExpense}/${item.id}`}
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

export default ExpenseListing;


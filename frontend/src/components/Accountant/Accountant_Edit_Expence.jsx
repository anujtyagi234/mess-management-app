// ExpenseEdit.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ExpenseEdit = () => {
  const { expenseType, expenseId } = useParams();
  const [expenseData, setExpenseData] = useState({});
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8000/${expenseType}/${expenseId}`)
      .then((res) => res.json())
      .then((resp) => {
        setExpenseData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [expenseId, expenseType]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = { ...expenseData };
    fetch(`http://localhost:8000/${expenseType}/${expenseId}`, {
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

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title" style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"1.35rem"}}>
                <h1><big>
                  <b>--Edit Expense Data--</b></big></h1>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label><h2><b><big>Select Expense Type:</big></b></h2></label>
                      <input
                        value={expenseData.id || ""}
                        disabled="disabled"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label><b>Title</b></label>
                      <input
                        required
                        value={expenseData.title || ""}
                        onMouseDown={() => setValidation(true)}
                        onChange={(e) =>
                          setExpenseData({ ...expenseData, title: e.target.value })
                        }
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label><b>Expence</b></label>
                      <input
                        value={expenseData.Expence || ""}
                        onChange={(e) =>
                          setExpenseData({ ...expenseData, Expence: e.target.value })
                        }
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        checked={expenseData.active || false}
                        onChange={(e) =>
                          setExpenseData({
                            ...expenseData,
                            active: e.target.checked,
                          })
                        }
                        type="checkbox"
                        className="form-check-input"
                      />
                      <label className="form-check-label">Is Active</label>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit" style={{backgroundColor:"green"}}>
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>

                    <p><span className="success"><b>Note: </b></span>change url: expense/edit/X/y (X is expense-type, y is the id)</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExpenseEdit;

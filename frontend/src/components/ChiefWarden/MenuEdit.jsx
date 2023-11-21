// EmpEdit.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = () => {
  const { empid } = useParams();
  const [mealType, setMealType] = useState("Breakfast");
  const [mealData, setMealData] = useState({});
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8000/${mealType}/${empid}`)
      .then((res) => res.json())
      .then((resp) => {
        setMealData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [empid, mealType]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = { ...mealData };
    fetch(`http://localhost:8000/${mealType}/${empid}`, {
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

  const handleMealTypeChange = (e) => {
    setMealType(e.target.value);
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title" style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"1.35rem"}}>
                <h1><big>
            <b>--Edit Mess Menu--</b></big></h1>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label><h2><b><big>Select Meal Type:</big></b></h2></label>
                      <select
                        value={mealType}
                        onChange={handleMealTypeChange}
                        className="form-control"
                      >
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Supper">Supper</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label><b>ID</b></label>
                      <input
                        value={mealData.id || ""}
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
                        value={mealData.title || ""}
                        onMouseDown={() => setValidation(true)}
                        onChange={(e) =>
                          setMealData({ ...mealData, title: e.target.value })
                        }
                        className="form-control"
                      />
                    
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label><b>Special</b></label>
                      <input
                        value={mealData.special || ""}
                        onChange={(e) =>
                          setMealData({ ...mealData, special: e.target.value })
                        }
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label><b>m1</b></label>
                      <input
                        value={mealData.m1 || ""}
                        onChange={(e) =>
                          setMealData({ ...mealData, m1: e.target.value })
                        }
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label><b>m2</b></label>
                      <input
                        value={mealData.m2 || ""}
                        onChange={(e) =>
                          setMealData({ ...mealData, m2: e.target.value })
                        }
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label><b>m3</b></label>
                      <input
                        value={mealData.m3 || ""}
                        onChange={(e) =>
                          setMealData({ ...mealData, m3: e.target.value })
                        }
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label><b>m4</b></label>
                      <input
                        value={mealData.m4 || ""}
                        onChange={(e) =>
                          setMealData({ ...mealData, m4: e.target.value })
                        }
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        checked={mealData.isactive || false}
                        onChange={(e) =>
                          setMealData({
                            ...mealData,
                            isactive: e.target.checked,
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

                    <p><span className="success"><b>Note: </b></span>change url: employee/edit/X/y (X is meal-type (breakfast,dinner,lunch or supper)y is id for monday-1,tuesday-2 and so on)</p>
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

export default EmpEdit;

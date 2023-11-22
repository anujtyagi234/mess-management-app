import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = () => {
  const { empid } = useParams();
  const [mealType, setMealType] = useState("Breakfast");
  const [mealData, setMealData] = useState({});

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
    <div className="container mx-auto max-w-lg p-6">
      <div className="text-center font-bold text-xl mb-6">
        <h1>--Edit Mess Menu--</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Meal Type:
            </label>
            <select
              value={mealType}
              onChange={handleMealTypeChange}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Supper">Supper</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ID
            </label>
            <input
              value={mealData.id || ""}
              disabled
              className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              required
              value={mealData.title || ""}
              onChange={(e) =>
                setMealData({ ...mealData, title: e.target.value })
              }
              className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>

<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Special
  </label>
  <input
    value={mealData.special || ""}
    onChange={(e) =>
      setMealData({ ...mealData, special: e.target.value })
    }
    className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    m1
  </label>
  <input
    value={mealData.m1 || ""}
    onChange={(e) =>
      setMealData({ ...mealData, m1: e.target.value })
    }
    className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    m2
  </label>
  <input
    value={mealData.m2 || ""}
    onChange={(e) =>
      setMealData({ ...mealData, m2: e.target.value })
    }
    className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    m3
  </label>
  <input
    value={mealData.m3 || ""}
    onChange={(e) =>
      setMealData({ ...mealData, m3: e.target.value })
    }
    className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    m4
  </label>
  <input
    value={mealData.m4 || ""}
    onChange={(e) =>
      setMealData({ ...mealData, m4: e.target.value })
    }
    className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  />
</div>

<div className="mb-4">
  <div className="flex items-center">
    <input
      checked={mealData.isactive || false}
      onChange={(e) =>
        setMealData({
          ...mealData,
          isactive: e.target.checked,
        })
      }
      type="checkbox"
      className="form-checkbox h-5 w-5 text-gray-600"
    />
    <label className="ml-2 text-gray-700 text-sm font-bold">
      Is Active
    </label>
  </div>
</div>

          <div className="mb-4">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Save
            </button>
            <Link
              to="/"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Back
            </Link>
          </div>
          <p className="text-green-700 font-bold">
            Note: Change URL: employee/edit/Lunch/x (x is id for monday-1,
            tuesday-2, and so on)
          </p>
        </div>
      </form>
    </div>
  );
};

export default EmpEdit;

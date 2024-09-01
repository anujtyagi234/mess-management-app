import React, { useState, useEffect } from "react";
import "./Mess_menu.css";
import Menu from "../../../imgs/ramen.gif";
import axios from "axios";

const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function MealPlanner() {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [mealData, setMealData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/messMenu/fetch", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { messMenu } = response.data;
      setMealData(messMenu);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const renderMealPlan = (mealType) => {
    const selectedMealData = mealData[0]?.[mealType]?.find(
      (item) => item.day === selectedDay
    );

    return (
      <div style={{marginBottom:"3rem"}}>
        <h3 className="Meal_Title">{`${mealType} Plan for ${selectedDay}`}</h3>
        <div className="Sp">
          <p>
            <span className="Special"> Special: </span>
            {selectedMealData?.special}
          </p>
        </div>
        <p>{selectedMealData?.m1}</p>
        <p>{selectedMealData?.m2}</p>
        <p>{selectedMealData?.m3}</p>
        <p>{selectedMealData?.m4}</p>
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
    <div className="Mess_menu_parent_container">
      <div className="Mess_container">
        <div className="MessMenu_header">
          <div className="boxer" style={{ height: "5%", width: "5%" }}>
            <img src={Menu} alt="" style={{ borderRadius: "0" }} />
          </div>
          <h1 className="Mess_Menu_heading">Today's Mess Menu</h1>
          <div className="boxer" style={{ height: "5%", width: "5%" }}>
            <img src={Menu} alt="" style={{ borderRadius: "0" }} />
          </div>
        </div>
        <div className="Dropdown" style={{ fontFamily: "Agbalumo" }}>
          <div className="select_menu" style={{ fontFamily: "Agbalumo" }}>
            <select
              className="Select_days_box"
              style={{ fontFamily: "Agbalumo" }}
              id="days"
              onChange={(e) => setSelectedDay(e.target.value)}
              value={selectedDay}
            >
              {DAYS_OF_WEEK.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="Break_dinn_sup_laun">
          <div className="parent_of_4_container">
            <div className="left2">{renderMealPlan("breakfast")}</div>
            <div className="right2">{renderMealPlan("lunch")}</div>
            <div className="left2">{renderMealPlan("supper")}</div>
            <div className="right2">{renderMealPlan("dinner")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealPlanner;


import React, { useState, useEffect } from 'react';
import './Mess_menu.css';  // Assuming this is the correct CSS file
import Menu from "../../../imgs/ramen.gif";

function MealPlanner() {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [mealData, setMealData] = useState([]);
  const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Supper'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = mealTypes.map(async (type) => {
          const response = await fetch(`http://localhost:8000/${type}`);
          const data = await response.json();

          // Find the meal data for the selected day
          const selectedMeal = data.find((meal) => meal.title === selectedDay);

          return { type, selectedMeal };
        });

        const mealDataMap = await Promise.all(promises);

        // Update the state with the meal data
        setMealData(mealDataMap);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [selectedDay]);

  const renderMealPlan = (mealType) => {
	const selectedMealData = mealData.find((meal) => meal.type === mealType);
  
	return (
	  <div>
		<h3 className="Meal_Title">{`${mealType} Plan for ${selectedDay}`}</h3>
		<div className="Sp">
		  <p>
			<span className="Special"> Special: </span>
			{selectedMealData?.selectedMeal?.special}
		  </p>
		</div>
		<p>{selectedMealData?.selectedMeal?.m1}</p>
		<p>{selectedMealData?.selectedMeal?.m2}</p>
		<p>{selectedMealData?.selectedMeal?.m3}</p>
		<p>{selectedMealData?.selectedMeal?.m4}</p>
		<p>{selectedMealData?.selectedMeal?.m5}</p>
	  </div>
	);
  };
  

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
        <div className="Dropdown">
          <div className="select_menu">
            <select
              className="Select_days_box"
              id="days"
              onChange={(e) => setSelectedDay(e.target.value)}
              value={selectedDay}
            >
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="Break_dinn_sup_laun">
          <div className="parent_of_4_container">
            <div className="left2">{renderMealPlan("Breakfast")}</div>
            <div className="right2">{renderMealPlan("Lunch")}</div>
            <div className="left2">{renderMealPlan("Supper")}</div>
            <div className="right2">{renderMealPlan("Dinner")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealPlanner;


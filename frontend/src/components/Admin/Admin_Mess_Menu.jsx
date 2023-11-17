import React, { useState } from "react";
import "./Admin_Mess_Menu.css";
import Menu from "../../imgs/ramen.gif";

function Mess_menu() {
	const [selectedDay, setSelectedDay] = useState("Monday");

	const days = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];

	const handleChangeDay = (e) => {
		setSelectedDay(e.target.value);
	};

	const mealData = {
		Breakfast: [
			{
				title: "Monday",
				special: "",
				m1: "Sprouts moong_dal,gram",
				m2: "Idle-Sambhar",
				m3: "Milk-Bournvita",
				m4: "Banana",
			},

			{
				title: "Tuesday",
				special: "",
				m1: "Sprouts moong_dal,gram",
				m2: "Aloo-Paratha,Sauce/Achar",
				m3: "Chai",
				m4: "Banana",
			},
			{
				title: "Wednesday",
				special: "",
				m1: "Sprouts moong_dal,gram",
				m2: "Sambhar-Bda/Bread-Butter",
				m3: "Milk",
				m4: "Banana",
			},
			{
				title: "Thursday",
				special: "",
				m1: "Sprouts moong_dal,gram",
				m2: "Paneer-Paratha,Sauce/Achar",
				m3: "Coffe",
				m4: "Banana",
			},
			{
				title: "Friday",
				special: "",
				m1: "Sprouts moong_dal,gram",
				m2: "Sambhar-vda/Khasta-pure,Sabje",
				m3: "Milk,Coffe",
				m4: "Banana",
			},
			{
				title: "Saturday",
				special: "",
				m1: "Sprouts moong_dal,gram",
				m2: "Chola-Samosha",
				m3: "Chai/Cofee",
				m4: "Banana",
			},
			{
				title: "Sunday",
				special: "",
				m1: "Sprouts moong_dal,gram",
				m2: "Poha-Jalebi",
				m3: "Milk",
				m4: "Banana",
			},
		],
		Lunch: [
			{
				speacial: "",

				title: "Monday",
				special: "",
				m1: "Matar-Paneer",
				m2: "",
				m3: "Roti-Rice",
				m4: "Rayta",
				m5: "Salad",
			},

			{
				title: "Tuesday",
				special: "",
				m1: "Mixveg",
				m2: "Chna-Dal",
				m3: "Roti-Rice",
				m4: "Salad",
				m5: "Dahi",
			},
			{
				title: "Wednesday",
				special: "",
				m1: "Bhindi-Pyaja",
				m2: "Kali-Massor-Dal",
				m3: "Roti-Rice",
				m4: "Salad",
				m5: "Boondi-Rayta",
			},
			{
				title: "Thursday",
				special: "",
				m1: "Kadhe",
				m2: "Aloo-Matar",
				m3: "Roti-Rice",
				m4: "Salad",
			},
			{
				title: "Friday",
				special: "",
				m1: "Mix-veg(Paneer)",
				m2: "Kali-Masoor",
				m3: "Roti-Rice",
				m4: "Salad",
				m5: "Dahi",
			},
			{
				title: "Saturday",
				special: "Gulab-Jamun",
				m1: "Kadhai-Paneer",
				m2: "",
				m3: "Roti-Rice",
				m4: "Salad",
			},
			{
				title: "Sunday",
				special: "",
				m1: "Chole-Bhature",
				m2: "Mithi-Chatne",
				m3: "",
				m4: "Salad",
				m5: "Pyaj-Rayta",
			},
		],
		Dinner: [
			{
				special: "Gulab-Jamun",
				title: "Monday",
				m1: "Aloo-Bhujiya",
				m2: "Rajma",
				m3: "Roti-Rice",
				m4: "Salad",
				m5: "",
			},
			{
				title: "Tuesday",
				special: "Fruit-Cream",
				m1: "Sahi-Panner",
				m2: "",
				m3: "Roti-Rice",
				m4: "Salad",
				m5: "",
			},
			{
				title: "Wednesday",
				special: "Fruit-Cream",
				m1: "Panner-Bhurji",
				m2: "Daal",
				m3: "Roti-Rice",
				m4: "Salad",
				m5: "",
			},
			{
				title: "Thursday",
				special: "Kheer",
				m1: "SoyabeenAloo",
				m2: "Arhar-Daal",
				m3: "Roti-Rice",
				m4: "Salad",
				m5: "",
			},
			{
				title: "Friday",
				special: "Rabdi",
				m1: "Bhindi-Pyaja",
				m2: "Chana-Daal",
				m3: "Roti-Rice",
				m4: "Salad",
				m5: "",
			},
			{
				title: "Saturday",
				special: "",
				m1: "VegBiryani",
				m2: "Green-Chatni",
				m3: "Papad",
				m4: "Salad",
				m5: "Rayta",
			},
			{
				title: "Sunday",
				special: "Icecream",
				m1: "Litti-Chokha",
				m2: "Daal",
				m3: "Chatni/Achar",
				m4: "Salad",
				m5: "",
			},
		],
		Supper: [
			{
				title: "Monday",
				special: "",
				m1: "Samosha-chai,Chatni",
				m2: "Chai",
			},
			{
				title: "Tuesday",
				special: "",
				m1: "Maggi/Chowmeen-sauce",
				m2: "Milk",
			},
			{
				title: "Wednesday",
				special: "",
				m1: "Sandwich-Sauce/Cuttlet",
				m2: "Coffe",
			},
			{
				title: "Thursday",
				special: "",
				m1: "Fruit-Salad",
				m2: "Hot-Bournvita",
			},
			{
				title: "Friday",
				special: "",
				m1: "Aloo-Pyaj-pakode",
				m2: "Chai",
			},
			{
				title: "Saturday",
				special: "",
				m1: "Holiday...",
				m2: "",
			},
			{
				title: "Sunday",
				special: "",
				m1: "Mathari/Bread-Pakode-Sauce",
				m2: "Bournvita/Milk",
			},
		],
	};

	const renderMealPlan = (mealType) => {
		const selectedMealData = mealData[mealType].find(
			(meal) => meal.title === selectedDay
		);

		return (
			<div>
				<h3 className="Meal_Title">{`${mealType} Plan for ${selectedDay}`}</h3>
				<div className="Sp">
					<p>
						<span className> Special: </span>
						{selectedMealData?.special}
					</p>
				</div>
				<p> {selectedMealData?.m1}</p>
				<p>{selectedMealData?.m2}</p>
				<p>{selectedMealData?.m3}</p>
				<p>{selectedMealData?.m4}</p>
				<p>{selectedMealData?.m5 }</p>
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
							onChange={handleChangeDay}
							value={selectedDay}
						>
							{days.map((day) => (
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

export default Mess_menu;

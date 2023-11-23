import React from "react";
import "../../Acc_Adm_Chf_Dashboard.css";
import { useState } from "react";
import AddExpence from './Accountant_Expence_list'
import MessMenu from '../Dashboard/Main/Mess_menu'
import Resolved_complains from '../Dashboard/Main/ResolvedComplain'
import Student_complains from '../Dashboard/Main/Student_Complain'
import Logout from "../Dashboard/Logout";
import Accountant_sidebar from './Accountant_sidebar'
function Dashboard_main() {
	const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");
	const [selectedExpenseType, setSelectedExpanceType] = useState("Vegitable_Expence");
	const handleMenuItemClick = (menuItem) => {
		setSelectedMenuItem(menuItem);
	};

	const handleExpanceChange =(newExpanceType)=>{
		setSelectedExpanceType(newExpanceType);
	  }

	let content;

	switch (selectedMenuItem) {
		case "Add-Expence":
			content = <AddExpence selectedExpense={selectedExpenseType} onExpenseTypeChange={handleExpanceChange}/>;
			break;
		case "Mess-Menu":
			content = <MessMenu/>;
			break;
		case "Unresolved-complains":
		content = <Student_complains/>;
		break;
        case "resolved-complains":
		content = <Resolved_complains/>;
		break;
        default:
		// Default content when no menu item is selected
		content = (
			<div>

		  <div className="default-content">
			<p >!! Hello.. !!</p>
		  </div>
		  </div>
		);
		break;
		
	}
	return (
        
		
        <div>
		<div className="App1">
		  <div className="Back1">
			<div>
			  <Accountant_sidebar onMenuItemClick={handleMenuItemClick} />
			  <Logout />
			</div>
			<div className="Middlepart1">
			  <div className="custom-content1">{content}</div>
			</div>
		  </div>
		</div>
	  </div>
	);
}

export default Dashboard_main;

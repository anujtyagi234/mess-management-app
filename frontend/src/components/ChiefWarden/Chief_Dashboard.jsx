import React from "react";
import "../../Acc_Adm_Chf_Dashboard.css";
import Logout from '../Dashboard/Logout';
import { useState } from "react";
import Sidebar_Chief from './Sidebar_Chief'
import Student_Complains from './Student_Complains'
import Resolved_Complains from './ResolvedComplain'
import Edit_Mess_Menu from './MenuListing_BreakFast'
import Unresolved_complain from '../ChiefWarden/Student_Complains'
import Mess_Menu from '../Dashboard/Main/Mess_menu'
import Dashmdefault from '../Accountant/DashmAccoundefault'
function Dashboard_main() {
	const [selectedMenu, setSelectedMenu] = useState("Breakfast");
	const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");
	const handleMenuItemClick = (menuItem) => {
		setSelectedMenuItem(menuItem);
	};
	const handleMenuChange = (newMenu) => {
		setSelectedMenu(newMenu);
	  };
  
	let content;
  
	switch (selectedMenuItem) {
	  case "Student-Complains":
		content = <Student_Complains />;
		break;
	  case "Resolved-Complains":
		content = <Resolved_Complains />;
		break;
	  case "Edit-Mess-Menu":
		content = <Edit_Mess_Menu selectedMenu={selectedMenu} onMenuChange={handleMenuChange}/>;
		break;
		case "Mess-Menu":
			content = <Mess_Menu/>;
			break;
	 
	  default:
		content = <Dashmdefault/>;
		break;
	}
  
	return (
	  <div>
		<div className="App1">
		  <div className="Back1">
			<div>
			  <Sidebar_Chief onMenuItemClick={handleMenuItemClick} />
			  <Logout />
			</div>
			<div className="MiddlePart1">
			  <div className="custom-content1">{content}</div>
			</div>
		  </div>
		</div>
	  </div>
	);
  }
  
  export default Dashboard_main;
  
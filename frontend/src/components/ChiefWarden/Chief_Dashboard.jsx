// ... (previous code)
import React from "react";
import "../../Acc_Adm_Chf_Dashboard.css";
import Logout from '../Dashboard/Logout';
import { useState } from "react";
import Sidebar_Chief from './Sidebar_Chief'
import Student_Complains from './Student_Complains'
import Resolved_Complains from './ResolvedComplain'
import Edit_Mess_Menu from './MenuListing_BreakFast'
import Unresolved_complain from '../ChiefWarden/Student_Complains'
function Dashboard_main() {
	const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");
  
	const handleMenuItemClick = (menuItem) => {
	  setSelectedMenuItem(menuItem);
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
		content = <Edit_Mess_Menu />;
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
			  <Sidebar_Chief onMenuItemClick={handleMenuItemClick} />
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
  
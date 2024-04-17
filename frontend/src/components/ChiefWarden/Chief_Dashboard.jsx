import React from "react";
import "../../Acc_Adm_Chf_Dashboard.css";
import Logout from '../Dashboard/Logout';
import { useState } from "react";
import Sidebar_Chief from './Sidebar_Chief'
import Student_Complains from './Student_Complains'
import Resolved_Complains from './ResolvedComplain'
import AddNotice from './NoticeBoard'
import Unresolved_complain from '../ChiefWarden/Student_Complains'
import Mess_Menu from './Chief_Mess_Menu'
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
		case "Mess-Menu":
			content = <Mess_Menu/>;
			break;

			case "AddNotice":
			content = <AddNotice/>;
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
  
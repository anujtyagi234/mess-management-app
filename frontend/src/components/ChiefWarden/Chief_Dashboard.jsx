import React from "react";
import "../../Acc_Adm_Chf_Dashboard.css";
import Logout from '../Dashboard/Logout';
import { useState } from "react";
import Sidebar_Chief from './Sidebar_Chief'
import Student_Complains from './Student_Complains'
import Resolved_Complains from './ResolvedComplain'
import AddNotice from './NoticeBoard'
import Mess_Menu from './Chief_Mess_Menu'
import Profile from './Profile_Chief'

function Dashboard_main() {
	const [selectedMenuItem, setSelectedMenuItem] = useState("ch_Profile");
	const handleMenuItemClick = (menuItem) => {
		setSelectedMenuItem(menuItem);
	};
  
	let content;
  
	switch (selectedMenuItem) {
		case "ch_Profile":
			content = <Profile/>;
			break;
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
  
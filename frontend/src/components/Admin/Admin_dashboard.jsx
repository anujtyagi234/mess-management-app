import React from "react";
import '../../Acc_Adm_Chf_Dashboard.css'
import Logout from "../Dashboard/Logout";
import { useState } from "react";
import Add_Accountant from './Add_Accountant'
import Add_Chiefwarden from './Add_Chief_warden'
import Resolved_complains from '../ChiefWarden/ResolvedComplain'
import Student_complains from '../ChiefWarden/Student_Complains'
import Admin_Dashboard from './Side_bar_Admin';
 import DashmAccoundefault from '../Accountant/DashmAccoundefault' 
function Dashboard_main() {
	const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");
	const handleMenuItemClick = (menuItem) => {
		setSelectedMenuItem(menuItem);
	};

	let content;

	switch (selectedMenuItem) {
		case "Add-ChiefWarden":
			content = <Add_Chiefwarden/>;
			break;
		case "Add-Accountant":
			content = < Add_Accountant/>;
			break;
		case "Unresolved-complains":
		content = <Student_complains/>;
		break;
        case "Resolved-complains":
		content = <Resolved_complains/>;
		break;
		default:
			content = <DashmAccoundefault/>;
			break;
		
	}
	return (
       
		
        <div>
		<div className="App1">
		  <div className="Back1">
			<div>
			  < Admin_Dashboard onMenuItemClick={handleMenuItemClick} />
			  <Logout />
			</div>
			<div className="MiddlePart1">
			{content}
			</div>
		  </div>
		</div>
	  </div>
	);
}

export default Dashboard_main;

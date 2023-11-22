import React from "react";
import "../../App.css";
import "../../Acc_Adm_Chf_Dashboard.css";

import { useState } from "react";
import Add_Accountant from './Add_Accountant'
import Add_Chiefwarden from './Add_Chief_warden'
import Resolved_complains from '../ChiefWarden/ResolvedComplain'
import Student_complains from '../ChiefWarden/Student_Complains'
import Admin_Dashboard from './AdminDashboard';
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
        case "resolved-complains":
		content = <Resolved_complains/>;
		break;
		
	}
	return (
		<div>
			<div className="App">
				<div className="Back">
					<Admin_Dashboard onMenuItemClick={handleMenuItemClick} />
					{content}
					<div>
				    <Logout/>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard_main;

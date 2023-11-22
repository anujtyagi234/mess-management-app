import React from "react";
import "../../Acc_Adm_Chf_Dashboard.css";

import { useState } from "react";
import Student_Complains from './Student_Complains'
import Resolved_Complains from './ResolvedComplain'
import Edit_Mess_Menu from './MenuEdit'
import Unresolved_complain from '../Admin/UnResolved_complain'
function Dashboard_main() {
	const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");
	const handleMenuItemClick = (menuItem) => {
		setSelectedMenuItem(menuItem);
	};

	let content;

	switch (selectedMenuItem) {
		case "Student-Complains":
			content = <Student_Complains/>;
			break;
		case "Resolved-Complains":
			content = < Resolved_Complains/>;
			break;
		case "Edit-Mess-Menu":
		content = <Edit_Mess_Menu/>;
		break;
        case "Unresolved-complain":
		content = <Unresolved_complain/>;
		break;
		
	}
	return (
		<div>
			<div className="App">
				<div className="Back">
					<Sidebar_Chief onMenuItemClick={handleMenuItemClick} />
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

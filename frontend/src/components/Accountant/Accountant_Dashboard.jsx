import React from "react";
import "../../Acc_Adm_Chf_Dashboard.css";
import { useState } from "react";
import AddExpence from './Accountant_Expence_list'
import MessMenu from '../Dashboard/Main/Mess_menu'
import Resolved_complains from '../ChiefWarden/Student_Complains'
import Student_complains from '../ChiefWarden/ResolvedComplain'
import Accountant_sidebar from './Accountant_sidebar'
function Dashboard_main() {
	const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");
	const handleMenuItemClick = (menuItem) => {
		setSelectedMenuItem(menuItem);
	};

	let content;

	switch (selectedMenuItem) {
		case "Add-Expence":
			content = <AddExpence/>;
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
		
	}
	return (
		<div>
			<div className="App">
				<div className="Back">
					<Accountant_sidebar onMenuItemClick={handleMenuItemClick} />
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

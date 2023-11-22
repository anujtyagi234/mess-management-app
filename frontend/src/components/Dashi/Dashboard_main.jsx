import React from "react";
import "../../App.css";
import { useState } from "react";
import Sidebar from "../Dashboard/Sidebar";
import Rightside from "../Dashboard/Rightside/Rightside";
import MainDash from "../Dashboard/Main/MainDash";
import Complain from "../Dashboard/Main/Complain";
import Mess_menu from "../Dashboard/Main/Mess_menu";
import WebCrator from "../Dashboard/Main/WebCrator";
import Rules from "../Dashboard/Main/Rule";
import Mnnit from "../Dashboard/Main/Mnnit";
import Contact from "../Dashboard/Main/Contact";
import Logout from "../Dashboard/Logout";
import UnResolved_complains from "../ChiefWarden/Student_Complains";
import Resolved_complains from '../ChiefWarden/ResolvedComplain'
function Dashboard_main() {
	const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");
	const handleMenuItemClick = (menuItem) => {
		setSelectedMenuItem(menuItem);
	};

	let content;

	switch (selectedMenuItem) {
		case "Dashboard":
			content = <MainDash />;
			break;
		case "Complain":
			content = <Complain />;
			break;
		case "Unresolved-Complain":
		content = <UnResolved_complains/>;
		break;
		case "Resolved-Complain":
		content = <Resolved_complains/>;
		break;
		case "Mess-Menu":
			content = <Mess_menu />;
			break;

		case "WebCrator":
			content = <WebCrator />;
			break;
		case "Rules":
			content = <Rules />;
			break;
		case "Mnnit Alld":
			content = <Mnnit />;
			break;
		case "Contact":
			content = <Contact />;
			break;
		default:
			content = null; 
	}
	return (
		<div>
			<div className="App">
				<div className="Back">
					<Sidebar onMenuItemClick={handleMenuItemClick} />
			 {content}

			<div>
				    <Logout/>
					<Rightside />
					</div>
					<div></div>
					</div>
				</div>
			</div>

	);
}

export default Dashboard_main;

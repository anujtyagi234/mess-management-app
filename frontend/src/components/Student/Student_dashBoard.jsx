import React from "react";
import "../../App.css";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Rightside from "./Rightside/Rightside";
import MainDash from "./Main/MainDash";
import Complain from "./Main/Complain";
import Mess_menu from "./Main/Mess_menu";
import WebCrator from "./Main/WebCrator";
import Rules from "./Main/Rule";
import Mnnit from "./Main/Mnnit";
import Contact from "./Main/Contact";
import Logout from "../Auth/Logout";
import UnResolved_complains from "./Main/Student_Complain";
import Resolved_complains from './Main/ResolvedComplain'
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
		case "Unresolved-Complains":
			content = <UnResolved_complains />;
			break;
		case "Resolved-Complains":
			content = <Resolved_complains />;
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
						<Logout />
						<Rightside />
					</div>
					<div></div>
				</div>
			</div>
		</div>

	);
}

export default Dashboard_main;

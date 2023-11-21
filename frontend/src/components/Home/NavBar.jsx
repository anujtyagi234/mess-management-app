import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
// import Dashboard_main from "../Dashi/Dashboard_main.jsx";
function NavBar() {

	const [showDashboardMain, setShowDashboardMain] = useState(false);

	const handleButtonClick = () => {
		// Toggle the state to show/hide DashboardMain
		setShowDashboardMain(!showDashboardMain);
	};
	return (
		<nav className="bg-green-500 p-4">
			<div className="flex flex-col items-center justify-between sm:flex-row sm:items-center">
				<Link to="/" className="text-2xl font-bold text-gray">
		<b><big>Mess Management</big></b>	
				</Link>
				<ul className="flex space-x-4 mt-4 sm:mt-0 " style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"1.2rem"}}>
					<li>
						<Link to="/" className="text-white">
						Home	
						</Link>
					</li>
         

					<li>
						<Link to="/signup" className="text-white">
							Sign up
						</Link>
					</li>
					<li>
						<Link to="/login" className="text-white">
						Login
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;

import React from "react";
import { useState } from "react";
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
				<Link to="/" className="text-2xl font-bold text-white">
					Mess Management
				</Link>
				<ul className="flex space-x-4 mt-4 sm:mt-0">
					
        <li>
            <button className="Dash_button" style={{
        width: '100px',
        height: '37px',
        backgroundColor: 'cyan',
        borderRadius: '6px',
        color: 'black',
        fontFamily: 'monospace',
        fontSize: '1.1rem',
        borderColor: 'black',
        borderWidth: '0.1rem',
        // Add any other styles you want
      }}>
						<Link to="/DashBoard" className="text-white">
						Dashboard
						</Link>
            </button>
					</li>
					<li>
						<Link to="/" className="text-white">
							Home
						</Link>
					</li>
         

					<li>
						<Link to="/signup" className="text-white">
							SignUp
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

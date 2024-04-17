
import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

function NavBar() {
  return (
    <nav className="p-4" style={{ 
      background: "linear-gradient(to right, #ffeb3b, #ff4081, #8bc34a, #f44336)",
      backgroundSize: "100% 150%",
      animation: "waves 3s infinite linear",
     fontFamily:"Agbalumo"
    }}>
    
      <div className="flex flex-col items-center justify-between sm:flex-row sm:items-center">
        <div className="container12">
          <img
            src="https://i.pinimg.com/originals/8c/ca/ec/8ccaec0b9c028ca89732508f8d22311e.gif"
            alt=""
            className="left-image"
          />
          <NavLink to="#" className="main-heading">
            <b>
              <big>Mess Management</big>
            </b>
          </NavLink>
        </div>
        <div className="header_style" >
          <ul className="flex space-x-4 mt-4 sm:mt-0" style={{  fontWeight: "bold", fontSize: "1.2rem" }}>
            <li>
              <NavLink exact to="/" className="text-white" activeClassName="active-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className="text-white" activeClassName="active-link">
                Sign up
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="text-white" activeClassName="active-link">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;


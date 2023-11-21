import React from "react";
import { Link } from "react-router-dom";

const headingStyle = {
  textShadow: "2px 2px #d800ff",
  color: "black",
  fontSize: "2rem",
};

function NavBar() {
  return (
    <nav className="p-4" style={{ 
      background: "linear-gradient(to right, #ffeb3b, #ff4081, #8bc34a, #f44336)",
      backgroundSize: "100% 150%",
      animation: "waves 3s infinite linear"
    }}>
      <style>
        {`
          @keyframes waves {
            0% {
              background-position: 0% 0%;
            }
            100% {
              background-position: 100% 0%;
            }
          }
        `}
      </style>
      <div className="flex flex-col items-center justify-between sm:flex-row sm:items-center">
        <div style={headingStyle}>
          <Link to="/" className="text-3xl font-bold text-gray">
            <b>
              <big>Mess Management</big>
            </b>
          </Link>
        </div>
        <ul className="flex space-x-4 mt-4 sm:mt-0" style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "1.2rem" }}>
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

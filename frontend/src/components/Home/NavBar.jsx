import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-green-500 p-4">
      <div className="flex flex-col items-center justify-between sm:flex-row sm:items-center">
        <Link to="/" className="text-2xl font-bold text-white">Mess Management</Link>
        <ul className="flex space-x-4 mt-4 sm:mt-0">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="/about" className="text-white">About</Link></li>
          <li><Link to="/signup" className="text-white">SignUp</Link></li>
          <li><Link to="/login" className="text-white">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

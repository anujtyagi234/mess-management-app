import React from 'react';

function NavBar() {
  return (
    <nav className="bg-green-500 p-4">
      <div className="flex flex-col items-center justify-between sm:flex-row sm:items-center">
        <a href="/" className="text-2xl font-bold text-white">Mess Management</a>
        <ul className="flex space-x-4 mt-4 sm:mt-0">
          <li><a href="/" className="text-white">Home</a></li>
          <li><a href="/" className="text-white">About</a></li>
          <li><a href="/" className="text-white">SignUp/Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

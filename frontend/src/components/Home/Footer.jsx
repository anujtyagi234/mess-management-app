import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className=" mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Mess Management</p>
        <p>Email: abcd123@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;

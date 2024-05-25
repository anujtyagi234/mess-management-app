import React from 'react';
import Navbar from './Home/NavBar';

export default function UnprotectedRoute({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

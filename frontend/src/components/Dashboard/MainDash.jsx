import React from 'react';
import './MainDash.css';
import Cards from './Cards/Cards';
function MainDash() {
  return (
    <div className='MainDash'>
      <h1 className='DashboardText'>DashBoard</h1>
      <Cards/>
    </div>
  );
}

export default MainDash;

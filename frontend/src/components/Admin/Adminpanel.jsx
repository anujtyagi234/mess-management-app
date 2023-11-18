
// AdminPanel.js
import React, { useState } from 'react';
import './Admin_pannel.css';
import AddAccount from './Add_Accountant';
import AddChief from './Add_Chief_warden'

const AdminPanel = () => {
  const [showChefForm, setShowChefForm] = useState(false);
  const [show_unresolved_problem, setshow_unresolved_problem] = useState(false);
  const [showAccountant, setShowAccountant] = useState(false);
  const toggleChefForm = () => {
    setShowChefForm(!showChefForm);
  };

  const toggleAccountant = () => {
    setShowAccountant(!showAccountant);
  };

  const toggle_unresolved_problem = () => {
    setshow_unresolved_problem(!show_unresolved_problem);
  };

 

  return (
    <div className='Admin_Pannel_control'>
      <div className="main_container">
        <div className="Main_heading">Welcome <span> Admin </span></div>
        <div className="Wrp_Add">
          <div className='Add_ChiefWarden'>
            <button onClick={toggleChefForm}>Add Chief Warden</button>
            {showChefForm && <AddChief/>}
          </div>
          <div className='Add_Accountant'>
            <button onClick={toggleAccountant}>Add Accountant</button>
            {showAccountant && <AddAccount />}
          </div>
        </div>
        <div className="Mess_MEnu_change">
          <div className='Update_menu'>
            <button onClick={toggle_unresolved_problem}>Unresolved Complains</button>
            {show_unresolved_problem && <AddAccount/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;


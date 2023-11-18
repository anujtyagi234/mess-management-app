
import React, { useState } from 'react';
import './ChiefWarden.css';
import Update_Menu from './Chief_Mess_Menu'
 import Show_unresolved_compalin from './Student_Complains'
import Resolve_complain_pannel from './Lets_Resolve_complain'
const AdminPanel = () => {
  const [showUnresolved_problem, setUnresolved_problem] = useState(false);
  const [showMenuForm, setShowMenuForm] = useState(false);
  const [show_Resolve_pannel, setshow_Resolve_pannel] = useState(false);

  const toggleChefForm = () => {
    setUnresolved_problem(!showUnresolved_problem);
  };

  const toggleAccountant = () => {
    setshow_Resolve_pannel(!show_Resolve_pannel);
  };

  const toggleMenuForm = () => {
    setShowMenuForm(!showMenuForm);
  };

  return (
    <div className='Admin_Pannel_control'>
      <div className="main_container">
        <div className="Main_heading">Welcome  <span>  Chief  Warden Sir </span></div>
        <div className="Wrp_Add">
          <div className='Add_ChiefWarden'>
            <button onClick={toggleChefForm}>Students Complain List </button>
            {showUnresolved_problem && <Show_unresolved_compalin/>}
          </div>
          <div className='Add_Accountant'>
            <button onClick={toggleAccountant}>Complain Resolve pannel</button>
            {show_Resolve_pannel && <Resolve_complain_pannel/>}
          </div>
        </div>
        <div className="Mess_MEnu_change">
          <div className='Update_menu'>
            <button onClick={toggleMenuForm}>Update Mess Menu</button>
            {showMenuForm && <Update_Menu/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;


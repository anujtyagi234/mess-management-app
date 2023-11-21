
import React, { useState } from 'react';
import './ChiefWarden.css';
import { Link } from 'react-router-dom';

import Update_Menu from './Chief_Mess_Menu'
 import Show_unresolved_compalin from './Student_Complains'
import Resolved_complain_pannel from './ResolvedComplain'
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
          <div className='Add'>
            
              <Link to='/Student_complain_list'>
          <button className="custom-button">
           Student complaints List
          </button>
        </Link>
          </div>
          <div className='Add'>
            
          <Link to='/Complain_Resolved_pannel'>
          <button className="custom-button">
          Resolved Complain
          </button>
        </Link>
           
          </div>
        </div>
        <div className="Mess_MEnu_change">
          <div className='Update_menu'>
          <Link to='/Update_mess_menu'>
          <button className="custom-button">
          Update mess menu
          </button>
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;


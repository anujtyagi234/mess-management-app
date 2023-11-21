
import React, { useState } from 'react';
import './Accountant.css';
import { Link } from 'react-router-dom';
import Logout from "../Dashboard/Logout";


 import Set_Expenses from './Set_Expenses'
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
        <div className="Main_heading">Welcome  <span> Accountant </span><Logout/></div>
        <div className="Wrp_Add">
          <div className='Add'>
            
              <Link to='/Expancebook'>
          <button className="custom-button">
          Expence Book
          </button>
        </Link>
          </div>
          <div className='Add'>
            
          <Link to='/Student_complain_list'>
          <button className="custom-button">
          Student complaints List
          </button>
        </Link>
           
          </div>
        </div>
        <div className="Mess_MEnu_change">
          <div className='Update_menu'>
          <Link to='/Accountant_menu'>
          <button className="custom-button">
          Mess menu
          </button>
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;


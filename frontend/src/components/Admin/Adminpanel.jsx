
// AdminPanel.js
import React, { useState } from 'react';
import './Admin_pannel.css';
import { Link } from 'react-router-dom';

import AddAccount from './Add_Accountant';
import AddChief from './Add_Chief_warden'
import Logout from "../Dashboard/Logout";

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
       
        <div className="Main_heading ">Welcome <span> Admin </span></div><Logout/>
        <div className="Wrp_Add">
          <div className='Add'>
            {/* <button onClick={toggleChefForm}>Add Chief Warden</button> */}

            <Link to='/Chief_admin'>
          <button className="custom-button">
            Add Chief Warden
          </button>
        </Link>
            {/* {showChefForm && <AddChief/>} */}
          </div>
          <div className='Add'>
            {/* <button onClick={toggleAccountant}>Add Accountant</button>
            {showAccountant && <AddAccount />} */}
<Link to='/Accountant_Admin'>
          <button className="custom-button">
            Add Accountant
          </button>
        </Link>

          </div>
        </div>
        <div className="Unresolved_complain">
          <div className='Update_menu'>
            {/* <button onClick={toggle_unresolved_problem}>Unresolved Complains</button>
            {show_unresolved_problem && <AddAccount/>} */}
            <Link to='/Unresolved_complain' >
          <button className="custom-button">
            UnResolved-complains
          </button>
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;


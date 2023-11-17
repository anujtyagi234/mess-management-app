// // AdminPanel.js
// import React, { useState } from 'react';
// import './Admin_pannel.css';

// import AdminPortal from './Admin_Mess_Menu';
// import AddAccount from './Admin_Mess_Menu';
// import MessMenuAdmin from './Admin_Mess_Menu';

// const AdminPanel = () => {
//   const [showChefForm, setShowChefForm] = useState(false);
//   const [showMenuForm, setShowMenuForm] = useState(false);
//   const [showAccountant, setShowAccountant] = useState(false);
//   const toggleChefForm = () => {
//     setShowChefForm(!showChefForm);
//   };
  
//   const toggleAccountant = () => {
//     setShowAccountant(!showAccountant);
    
//   };
  
//   const toggleMenuForm = () => {
//     setShowMenuForm(!showMenuForm);
//   };
 

//   return (
//     <div className='Admin_Pannel_control'>
//       <div className="main_container">
//         <div className="Main_heading">Welcome <span> Admin </span></div>
//         <div className="Wrp_Add">
//           <div className='Add_ChiefWarden'>
//             <button onClick={toggleChefForm}>Add Chief Warden</button>
//             {showChefForm && <AdminPortal />}
//           </div>
//           <div className='Add_Accountant'>
//             <button onClick={toggleAccountant}>Add Accountant</button>
//             {showAccountant && <AddAccount />}
//           </div>
//         </div>
//         <div className="Mess_MEnu_change">
//           <div className='Update_menu'>
//             <button onClick={toggleMenuForm}>Change Menu</button>
//             {showMenuForm && <MessMenuAdmin />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;



// AdminPanel.js
import React, { useState } from 'react';
import './Admin_pannel.css';
import { Link } from 'react-router-dom';

import AdminPortal from './Admin_Mess_Menu';
import AddAccount from './Add_Accountant';
import MessMenuAdmin from './Admin_Mess_Menu';
import AddChief from './Add_Chief_warden'
const AdminPanel = () => {
  const [showChefForm, setShowChefForm] = useState(false);
  const [showMenuForm, setShowMenuForm] = useState(false);
  const [showAccountant, setShowAccountant] = useState(false);

  const toggleChefForm = () => {
    setShowChefForm(!showChefForm);
  };

  const toggleAccountant = () => {
    setShowAccountant(!showAccountant);
  };

  const toggleMenuForm = () => {
    setShowMenuForm(!showMenuForm);
  };

  const openNewTab = (path) => {
    const newTab = window.open(path, '_blank');
    if (!newTab) {
      alert('Popup blocked! Please allow popups for this website.');
    }
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
            <button onClick={toggleMenuForm}>Change Menu</button>
            {showMenuForm && <MessMenuAdmin />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;


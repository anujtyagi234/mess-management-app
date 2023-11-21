import React from "react";
import { jwtDecode } from "jwt-decode";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home/Home.jsx"
import NavBar from "./components/Home/NavBar.jsx";

import Footer from "./components/Home/Footer.jsx";
import Login from "./components/Login/login.jsx";
import Signup from './components/Signup/signup.jsx'
import Dashi from "./components/Dashi/Dashboard_main.jsx";
import { useAuthContext } from "./hooks/useAuthContext.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";

import Admin_panel from './components/Admin/Adminpanel.jsx'
import Accountant_Admin from './components/Admin/Add_Accountant.jsx'
import Unresolved_complain_admin from './components/Admin/UnResolved_complain.jsx'
import Chief_Admin from './components/Admin/Add_Chief_warden.jsx'
import ChiefWarden_mess_menu_update from './components/ChiefWarden/MenuListing_BreakFast.jsx'
 import Chief_Student_complaints from './components/ChiefWarden/Student_Complains.jsx'
import ChiefWarden from './components/ChiefWarden/ChiefWarden.jsx'
import Email from './components/Email.jsx'
import Chief_Complaints_resolve_pannel from './components/ChiefWarden/Lets_Resolve_complain.jsx'
import Temp from './components/ChiefWarden/Temp.jsx'


import Mess_menu_Copy from './components/ChiefWarden/Chief_Mess_Menu.jsx'
import EmpListing from './components/ChiefWarden/MenuListing_BreakFast.jsx';
import EmpCreate from './components/ChiefWarden/MenuCreate.jsx';
import EmpDetail from './components/ChiefWarden/MenuDetail.jsx';
import EmpEdit from './components/ChiefWarden/MenuEdit.jsx';

import Menu2 from './components/Dashboard/Main/Mess_menu.jsx'
 
export default function App() {
  const { userrole } = useAuthContext();

  const handleMenuChange = (newMenu) => {
    setSelectedMenu(newMenu);
  };
  return (
    
    <div className="wrapper">
      <Router>
        {!decodedToken && <NavBar />}
        <Routes>
        {!decodedToken && (
            <Route path="/" element={<Home />} />
          )}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {decodedToken && decodedToken.userrole === 'student' && (
            <Route path="/" element={<Dashi />} />
          ) }
          {decodedToken && decodedToken.userrole === 'admin' && (
            <Route path="/" element={<Admin_panel/>} />
            ) }
            {decodedToken && decodedToken.userrole === 'chief warden' && (
            <Route path="/" element={<ChiefWarden/>} />
            ) }
            </Routes>
          {!userrole && <Footer />}

      {/* <Admin_panel/> */}
      {/* <ChiefWarden_mess_menu_update/> */}


      <Routes>
     





<Route path="/" element={<Dashi/>}/>
{/*  
<Route path="/Accountant_Admin" element={<Accountant_Admin/>} />


<Route path="/Chief_admin" element={<Chief_Admin/>} />

<Route path="/Unresolved_complain" element={<Unresolved_complain_admin/>} />



<Route path="/Student_complain_list" element={<Chief_Student_complaints/>} />

<Route path="/Complain_Resolve_pannel" element={<Chief_Complaints_resolve_pannel/>} />

<Route path="/Update_mess_menu" element={<ChiefWarden_mess_menu_update/>} />  */}


 
<Route
          path="/"
          element={<EmpListing selectedMenu={selectedMenu} onMenuChange={handleMenuChange} />}
        />
        <Route path="/employee/edit/:menu/:empid" element={<EmpEdit />} />
          <Route path='/employee/create' element={<EmpCreate />}></Route>
          <Route path='/employee/detail/Breakfast/:empid' element={<EmpDetail />}></Route>
          <Route path='/employee/edit/Lunch/:empid' element={<EmpEdit />}></Route>   
 



{/* <Route path='/' element={<Menu2/>}></Route> */}

       </Routes>
    </Router>
    </div>
  );
}








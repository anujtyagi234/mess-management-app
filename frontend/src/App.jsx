import React from "react";
import './Acc_Adm_Chf_Dashboard.css'
import { jwtDecode } from "jwt-decode";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Home from "./components/Home/Home.jsx"
import NavBar from "./components/Home/NavBar.jsx";

import Footer from "./components/Home/Footer.jsx";
import Login from "./components/Login/login.jsx";
import Signup from './components/Signup/signup.jsx'
import ForgotPassword from "./components/reset/forgotPassword.jsx";
import ResetPassword from "./components/reset/resetPassword.jsx";
import Dashi from "./components/Dashi/Dashboard_main.jsx";
import { useAuthContext } from "./hooks/useAuthContext.jsx";

import AdminPanel from './components/Admin/Adminpanel.jsx'
import AddAccountant from './components/Admin/Add_Accountant.jsx'
import Unresolved_complain_admin from './components/Admin/UnResolved_complain.jsx'
import AddChiefWarden from './components/Admin/Add_Chief_warden.jsx'
import Admin_Dashboard from './components/Admin/Admin_dashboard.jsx'
import ChiefWarden_mess_menu_update from './components/ChiefWarden/MenuListing_BreakFast.jsx'
 import Chief_Student_complaints from './components/ChiefWarden/Student_Complains.jsx'
import ChiefWarden from './components/ChiefWarden/ChiefWarden.jsx'
import Email from './components/Email.jsx'
import Rateus from "./components/Dashboard/Student_Reviews/DataUpdatePage.jsx"
import Chief_Complaints_resolve_pannel from './components/ChiefWarden/ResolvedComplain.jsx'

import Mess_menu_Copy from './components/ChiefWarden/Chief_Mess_Menu.jsx'
import ExpenseListing from './components/Accountant/Accountant_Expence_list.jsx'
import Expence_edit from './components/Accountant/Accountant_Edit_Expence.jsx'
import EmpListing from './components/ChiefWarden/MenuListing_BreakFast.jsx';
import EmpCreate from './components/ChiefWarden/MenuCreate.jsx';
import EmpDetail from './components/ChiefWarden/MenuDetail.jsx';
import EmpEdit from './components/ChiefWarden/MenuEdit.jsx';
import Menu2 from './components/Dashboard/Main/Mess_menu.jsx'
import Accountant from './components/Accountant/Accountant.jsx'
import Accountant_Dashboard from './components/Accountant/Accountant_Dashboard.jsx'

 import Set_Expenses from './components/Accountant/Accountant_Expence_list.jsx'
 import MessMenu from './components/Dashboard/Main/Mess_menu.jsx'
 import ChiefDashboard from './components/ChiefWarden/Chief_Dashboard.jsx'
export default function App() {
  const [selectedMenu, setSelectedMenu] = useState("Breakfast");
  const [selectedExpenseType, setSelectedExpanceType] = useState("Vegitable_Expence");


  const { userrole } = useAuthContext();
  const token = localStorage.getItem('token');
  const [decodedToken, setDecodedToken] = useState(null);

  // Update the decodedToken state using setDecodedToken
  useEffect(() => {
    if (token) {
      setDecodedToken(jwtDecode(token));
    } else {
      setDecodedToken(null);
    }
  }, [token]);

  // Check if the token is expired
  const isTokenExpired = decodedToken && decodedToken.exp * 1000 < Date.now();
  if(isTokenExpired){
    setDecodedToken(null);
  }
 
  const handleMenuChange = (newMenu) => {
    setSelectedMenu(newMenu);
  };

  const handleExpanceChange =(newExpanceType)=>{
    setSelectedExpanceType(newExpanceType);
  }

 
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
          <Route path="/forgot-password" element={<ForgotPassword />}/>
          <Route path="/reset_password/:id/:token" element={<ResetPassword />}></Route> 
        
          {decodedToken && decodedToken.userrole === 'student' && (
            <>
            <Route path="/" element={<Dashi />} />
            <Route path="/Email" element={<Email/>}/>
            <Route path="/rate-us" element={<Rateus/>}/>

            
             </>
           
            ) }
          {decodedToken && decodedToken.userrole === 'admin' && (
            <>
            <Route path="/" element={<Admin_Dashboard />} />
            <Route path="/Accountant_Admin" element={<AddAccountant />} />
            <Route path="/Unresolved_complain" element={<Unresolved_complain_admin />} />
            <Route path="/Chief_admin" element={<AddChiefWarden />} />
          </>
            ) }
            {decodedToken && decodedToken.userrole === 'chief warden' && (
            <>
            <Route path="/" element={<ChiefDashboard />} />
            <Route path="/Complain_Resolved_pannel" element={<Chief_Complaints_resolve_pannel/>} />
            <Route path="/Student_complain_list" element={<Chief_Student_complaints/>} />
            <Route exact path="/employee/edit/:menu/:empid" element={<EmpEdit />} />
            <Route path="/Update_mess_menu" element={<ChiefWarden_mess_menu_update selectedMenu={selectedMenu} onMenuChange={handleMenuChange}/>} />
          </>
            ) }
            {decodedToken && decodedToken.userrole === 'accountant' && (
            <>
              <Route path="/" element={<Accountant_Dashboard />} />
              <Route path="/Expancebook" element={<ExpenseListing selectedExpense={selectedExpenseType} onExpenseTypeChange={handleExpanceChange} />} />
              <Route path="/expense/edit/:type/:empid" element={<Expence_edit />} />
              <Route path="/Accountant_menu" element={<MessMenu/>} />
              <Route path="/Student_complain_list" element={<Chief_Student_complaints/>} />

            </>
            ) }
            </Routes>
          {!decodedToken && <Footer />}  


      
     

{/* <Route path="/" element={<Dashi/>}/> */}



{/* <Route path="/" element={<Dashi/>}/> */}
{/*  
<Route path="/Accountant_Admin" element={<Accountant_Admin/>} />


<Route path="/Chief_admin" element={<Chief_Admin/>} />

<Route path="/Unresolved_complain" element={<Unresolved_complain_admin/>} />



<Route path="/Student_complain_list" element={<Chief_Student_complaints/>} />

<Route path="/Complain_Resolve_pannel" element={<Chief_Complaints_resolve_pannel/>} />

<Route path="/Update_mess_menu" element={<ChiefWarden_mess_menu_update/>} />  */}


  
   {/* <Route
          path="/"
          element={<EmpListing selectedMenu={selectedMenu} onMenuChange={handleMenuChange} />}
        />
        <Route exact path="/employee/edit/:menu/:empid" element={<EmpEdit />} /> */}
           


{/* 
            <Route path='/employee/detail/Breakfast/:empid' element={<EmpDetail />}></Route>
          
         <Route path='/employee/edit/Lunch/:empid' element={<EmpEdit />}></Route>  */}





  
  {/* <Route
          path="/Expancebook"
          element={<ExpenseListing selectedExpense={selectedExpenseType} onExpenseTypeChange={handleExpanceChange} />}
        />

<Route path="/expense/edit/:type/:empid" element={<Expence_edit/>} />



<Route path='/' element={<Accountant/>}></Route>   */}



{/* <Route path='/' element={<Chief_Resolved_complains/>}></Route>  */}


       {/* testing  */}
       {/* <Chief_Resolved_complains/> */}


       {/* <Route path="/" element={<NavBar/>} /> */}

       {/* <Route path="/" element={<Admin_Dashboard/>} /> */}
       {/* <Route path="/" element={<Admin_Dashboard/>} /> */}

       {/* <Route path="/" element={<ChiefDashboard/>}/> */}
       {/* <Route path="/" element={<Accountant_Dashboard/>}/>  */}
       
       {/* { <Route path="/Email" element={<Email/>}/>   } */}
       {/* <Route path="/" element={<Dashi/>}/>  */}
       {/* </Routes> */}
    </Router>
    </div>
  );
}







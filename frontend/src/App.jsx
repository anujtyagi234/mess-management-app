import React from "react";
import { jwtDecode } from "jwt-decode";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import NavBar from "./components/Home/NavBar.jsx";
import Footer from "./components/Home/Footer.jsx";
import Login from "./components/Login/login.jsx";
import Signup from './components/Signup/signup.jsx'
import Dashi from "./components/Dashi/Dashboard_main.jsx";
import { useAuthContext } from "./hooks/useAuthContext.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import ChiefWarden from './components/ChiefWarden/ChiefWarden.jsx'
import Admin_panel from './components/Admin/Adminpanel.jsx'





export default function App() {
  const { userrole } = useAuthContext();
  const token = localStorage.getItem('token');
  const decodedToken = token ? jwtDecode(token) : null;

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
          {!decodedToken && <Footer />}

      
      {/* <ChiefWarden/> */}
    </Router>
    </div>
  );
}








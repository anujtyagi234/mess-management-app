import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import NavBar from "./components/Home/NavBar.jsx";
import Footer from "./components/Home/Footer.jsx";
import Login from "./components/Login/login.jsx";
import Signup from './components/Signup/signup.jsx'
import Dashi from "./components/Dashi/Dashboard_main.jsx";
import { useAuthContext } from "./hooks/useAuthContext.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";

export default function App() {
  const { userrole } = useAuthContext();

  return (
    <div className="wrapper">
      <Router>
        {!userrole && <NavBar />}
        <Routes>
        {!userrole && (
            <Route path="/" element={<Home />} />
          )}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {userrole==="student" && (
            <Route path="/" element={<Dashi />} />
          ) }
          {userrole==="admin" && (
            <Route path="/" element={<AdminDashboard />} />
          ) }
        </Routes>
        {!userrole && <Footer />}
      </Router>
    </div>
  );
}

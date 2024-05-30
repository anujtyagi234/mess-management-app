import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Acc_Adm_Chf_Dashboard.css';
import Home from './components/Home/Home';
import Footer from './components/Home/Footer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ForgotPassword from './components/reset/ForgotPassword';
import ResetPassword from './components/reset/ResetPassword';
import Dashi from './components/Dashi/Dashboard_main';
import Admin_Dashboard from './components/Admin/Admin_dashboard';
import AddAccountant from './components/Admin/Add_Accountant';
import AddChiefWarden from './components/Admin/Add_Chief_warden';
import Chief_Complaints_resolve_pannel from './components/ChiefWarden/ResolvedComplain';
import Chief_Student_complaints from './components/ChiefWarden/Student_Complains';
import ChiefDashboard from './components/ChiefWarden/Chief_Dashboard';
import ExpenseListing from './components/Accountant/Accountant_Expense_list';

import MessMenu from './components/Dashboard/Main/Mess_menu';
import Accountant_Dashboard from './components/Accountant/Accountant_Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import UnprotectedRoute from './components/UnprotectedRoute';
import Feedback from './components/Email'

export default function App() {
  const [selectedExpenseType, setSelectedExpenseType] = useState('Vegetable_Expense');

  const handleExpenseChange = (newExpenseType) => {
    setSelectedExpenseType(newExpenseType);
  };

  return (
    <div className="wrapper">
      <Router>
        <Routes>
          {/* Unprotected routes */}
          <Route path="/" element={<UnprotectedRoute><Home /></UnprotectedRoute>} />
          <Route path="/login" element={<UnprotectedRoute><Login /></UnprotectedRoute>} />
          <Route path="/signup" element={<UnprotectedRoute><Signup /></UnprotectedRoute>} />
          <Route path="/forgot-password" element={<UnprotectedRoute><ForgotPassword /></UnprotectedRoute>} />
          <Route path="/reset_password/:id/:token" element={<UnprotectedRoute><ResetPassword /></UnprotectedRoute>} />

          {/* Protected routes */}
          <Route path="/dashi" element={<ProtectedRoute roles={['student']}><Dashi /></ProtectedRoute>} />
          <Route path="/feedback" element={<ProtectedRoute roles={['student']}><Feedback /></ProtectedRoute>} />
          <Route path="/admin/dashboard" element={<ProtectedRoute roles={['admin']}><Admin_Dashboard /></ProtectedRoute>} />
          <Route path="/admin/accountant" element={<ProtectedRoute roles={['admin']}><AddAccountant /></ProtectedRoute>} />
          <Route path="/admin/chief" element={<ProtectedRoute roles={['admin']}><AddChiefWarden /></ProtectedRoute>} />
          <Route path="/chief/dashboard" element={<ProtectedRoute roles={['chief warden']}><ChiefDashboard /></ProtectedRoute>} />
          <Route path="/chief/complain_resolved_panel" element={<ProtectedRoute roles={['chief warden']}><Chief_Complaints_resolve_pannel /></ProtectedRoute>} />
          <Route path="/chief/student_complain_list" element={<ProtectedRoute roles={['chief warden']}><Chief_Student_complaints /></ProtectedRoute>} />
          <Route path="/accountant/dashboard" element={<ProtectedRoute roles={['accountant']}><Accountant_Dashboard /></ProtectedRoute>} />
          <Route path="/accountant/expansebook" element={<ProtectedRoute roles={['accountant']}><ExpenseListing selectedExpense={selectedExpenseType} onExpenseTypeChange={handleExpenseChange} /></ProtectedRoute>} />
          
          <Route path="/accountant/menu" element={<ProtectedRoute roles={['accountant']}><MessMenu /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

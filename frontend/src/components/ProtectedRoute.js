import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ roles, children }) => {
  const getUserData = () => {
    const userId = localStorage.getItem('userId');
    const userRole = localStorage.getItem('userRole');
    return { userId, userRole };
  };

  const { userId, userRole } = getUserData();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId || !roles.includes(userRole)) {
      navigate('/login', { state: { from: location } });
    }
  }, [userId, userRole, roles, navigate, location]);

  if (!userId || !roles.includes(userRole)) {
    return null;
  }

  return children;
};

export default ProtectedRoute;

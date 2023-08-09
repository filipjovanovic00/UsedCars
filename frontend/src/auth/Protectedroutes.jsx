import React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoutes = () => {
    const isAuth = localStorage.getItem('token');
    if (isAuth ==='null') {
      return <Navigate to="/login" />;
    }
    return <Outlet />;
  };

export default ProtectedRoutes;
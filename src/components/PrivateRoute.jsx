import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import * as ROUTES from '../constants/clientRoute';

const PrivateRoute = () => {
  const user = useAuth();
  console.log('userId:' + user.userId);
  if (!user.userId) return <Navigate to={ROUTES.LOGIN} />;
  return <Outlet />;
};

export default PrivateRoute;

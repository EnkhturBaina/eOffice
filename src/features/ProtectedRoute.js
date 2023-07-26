import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import AuthContext from '../context/AuthContext';

const ProtectedRoute = () => {
   const { user } = useContext(AuthContext);
   const location = useLocation();
   console.log('ProtectedRoute -------->', user);
   console.log('location -------->', location);
   if (user) {
      return <Outlet />;
   }
   return <Navigate to="/" state={{ from: location }} />;
};
export default ProtectedRoute;

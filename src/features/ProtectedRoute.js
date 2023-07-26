import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import AuthContext from '../context/AuthContext';

const ProtectedRoute = () => {
   const { user, isLoggedIn } = useContext(AuthContext);
   const location = useLocation();
   console.log('ProtectedRoute -------->', user, isLoggedIn, location);
   console.log('location -------->', location);
   if (isLoggedIn) {
      return <Outlet />;
   }
   return <Navigate to="/" state={{ from: location }} />;
};
export default ProtectedRoute;

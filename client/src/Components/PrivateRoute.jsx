import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthSelector } from '../Store/AuthStore/AuthSlice';

function PrivateRoute({ children }) {
  const {
    auth: { user },
  } = useSelector(AuthSelector);

  return user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;

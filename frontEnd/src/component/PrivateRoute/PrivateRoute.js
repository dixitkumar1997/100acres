import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/auth';

const PrivateRoute = ({ children }) => {
  const navigate=useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  console.log(isAuthenticated)

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
};

export default PrivateRoute;
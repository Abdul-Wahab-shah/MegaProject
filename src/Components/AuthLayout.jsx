import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import authService from '../Appwrite/auth';~~

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        if (authentication && authStatus !== authentication) {
          navigate('/login');
        } else if (!authentication && authStatus !== authentication) {
          navigate('/');
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        // Handle error, for example, redirect to login page
        navigate('/login');
      } finally {
        setLoader(false);
      }
    };

    checkAuthentication();
  }, [authStatus, authentication, navigate]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}

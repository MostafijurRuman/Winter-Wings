import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <p>Loading...</p>;
  if (user) return children;

  return <Navigate to="/login" state={location.pathname}  />;
};

export default PrivateRoutes;

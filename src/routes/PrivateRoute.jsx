import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center w-screen">
        <progress className="progress w-32 h-32"></progress>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{from: location}} replace />
  }
};

export default PrivateRoute;

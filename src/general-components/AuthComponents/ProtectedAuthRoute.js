import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../contexts/UserAuthContext";

const ProtectedAuthRoute = ({ children }) => {

  const { user } = useUserAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedAuthRoute;

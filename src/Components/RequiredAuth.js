import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

function RequiredAuth({ children }) {
  const auth = useAuth();

  if (auth.isAuthenticated) {
    return <>{children}</>;
  }
  return <>
    <Navigate to="/login" />
  </>
}

export default RequiredAuth;

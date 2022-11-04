import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "./AuthV2";

function RequiredAuth({ children }) {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn)

  if (isLoggedIn) {
    return <>{children}</>;
  }
  return <>
    <Navigate to="/login" />
  </>
}

export default RequiredAuth;

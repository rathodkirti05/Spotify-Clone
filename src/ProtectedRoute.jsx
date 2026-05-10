// src/components/ProtectedRoute.jsx

import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const user =
    localStorage.getItem("spotifyUser");

  if (!user) {

    return <Navigate to="/" />;

  }

  return children;
}

export default ProtectedRoute;
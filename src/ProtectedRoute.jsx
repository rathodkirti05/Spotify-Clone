import { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./firebase";

function ProtectedRoute({ children }) {

  const [user, setUser] = useState(undefined);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);

    });

    return () => unsubscribe();

  }, []);

  // LOADING

  if (user === undefined) {

    return (

      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "200px"
        }}
      >
        Loading...
      </h1>

    );
  }

  // NOT LOGIN

  if (!user) {

    return <Navigate to="/login" />;
  }

  // LOGIN SUCCESS

  return children;
}

export default ProtectedRoute;
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

import { auth } from "./firebase";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  // USER CHECK

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);

    });

    return () => unsubscribe();

  }, []);

  // SIGNUP

  const signup = async () => {

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Account Created ✅");

    } catch (error) {

      alert(error.message);

    }
  };

  // LOGIN

  const login = async () => {

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Success ✅");

      navigate("/trending");

    } catch (error) {

      alert(error.message);

    }
  };

  // LOGOUT

  const logout = async () => {

    await signOut(auth);

    alert("Logout Success ✅");

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#111"
      }}
    >

      <div
        style={{
          width: "420px",
          background: "#181818",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center"
        }}
      >

        <h1
          style={{
            color: "#1db954",
            marginBottom: "25px",
            fontSize: "50px"
          }}
        >
          SpotifyX
        </h1>

        {
          user && (
            <h3
              style={{
                color: "white",
                marginBottom: "20px"
              }}
            >
              Welcome {user.email}
            </h3>
          )
        }

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "16px",
            border: "none",
            borderRadius: "12px",
            marginBottom: "18px",
            background: "#222",
            color: "white",
            fontSize: "16px",
            outline: "none"
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "16px",
            border: "none",
            borderRadius: "12px",
            marginBottom: "20px",
            background: "#222",
            color: "white",
            fontSize: "16px",
            outline: "none"
          }}
        />

        <button
          onClick={signup}
          style={{
            width: "100%",
            padding: "15px",
            border: "none",
            borderRadius: "40px",
            background: "#1db954",
            color: "white",
            fontSize: "18px",
            marginBottom: "15px",
            cursor: "pointer"
          }}
        >
          Signup
        </button>

        <button
          onClick={login}
          style={{
            width: "100%",
            padding: "15px",
            border: "none",
            borderRadius: "40px",
            background: "white",
            color: "black",
            fontSize: "18px",
            marginBottom: "15px",
            cursor: "pointer"
          }}
        >
          Login
        </button>

        {
          user && (
            <button
              onClick={logout}
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                borderRadius: "40px",
                background: "red",
                color: "white",
                fontSize: "18px",
                cursor: "pointer"
              }}
            >
              Logout
            </button>
          )
        }

      </div>

    </div>
  );
}

export default Login;
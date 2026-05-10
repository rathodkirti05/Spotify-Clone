import { useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";

import {
  auth,
  googleProvider
} from "./firebase";

import "./App.css";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  // =========================
  // MOCKAPI URL
  // =========================

  const API =
    "https://6a0041582b7ab34960302c69.mockapi.io/users";

  // =========================
  // SIGNUP
  // =========================

  const signup = async () => {

    if (!email || !password) {

      alert("Enter Email & Password");

      return;
    }

    try {

      // FIREBASE SIGNUP

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      // SAVE IN SESSION

      sessionStorage.setItem(
        "user",
        JSON.stringify(userCredential.user)
      );

      // SAVE IN MOCKAPI

      await fetch(API, {

        method: "POST",

        headers: {
          "Content-Type":
          "application/json"
        },

        body: JSON.stringify({

          email: email,

          password: password
        })
      });

      alert("Signup Success ✅");

      window.location.href =
        "/home";

    } catch (error) {

      alert(error.message);
    }
  };

  // =========================
  // LOGIN
  // =========================

  const login = async () => {

    if (!email || !password) {

      alert("Enter Email & Password");

      return;
    }

    try {

      // FIREBASE LOGIN

      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      sessionStorage.setItem(
        "user",
        JSON.stringify(userCredential.user)
      );

      alert("Login Success ✅");

      window.location.href =
        "/home";

    } catch (error) {

      alert(error.message);
    }
  };

  // =========================
  // GOOGLE LOGIN
  // =========================

  const googleLogin = async () => {

    try {

      const result =
        await signInWithPopup(
          auth,
          googleProvider
        );

      sessionStorage.setItem(
        "user",
        JSON.stringify(result.user)
      );

      // SAVE GOOGLE USER IN MOCKAPI

      await fetch(API, {

        method: "POST",

        headers: {
          "Content-Type":
          "application/json"
        },

        body: JSON.stringify({

          email:
            result.user.email,

          password:
            "Google Login"
        })
      });

      alert(
        "Google Login Success ✅"
      );

      window.location.href =
        "/home";

    } catch (error) {

      alert(error.message);
    }
  };

  return (

    <div className="login-page">

      <div className="login-box">

        <h1>SpotifyX 🎵</h1>

        <p>
          Login to continue music world
        </p>

        <form>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>
              setPassword(e.target.value)
            }
          />

          <button
            type="button"
            className="signup-btn"
            onClick={signup}
          >
            Signup
          </button>

          <button
            type="button"
            className="login-btn"
            onClick={login}
          >
            Login
          </button>

          <button
            type="button"
            className="google-btn"
            onClick={googleLogin}
          >
            Continue With Google
          </button>

        </form>

        <div className="login-links">

          <a href="">
            Forgot Password?
          </a>

          <a href="">
            Create Account
          </a>

        </div>

      </div>

    </div>
  );
}

export default Login;
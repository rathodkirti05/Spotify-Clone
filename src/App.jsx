import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Playlist from "./pages/Playlist";
import Contact from "./pages/Contact";

import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

import "./index.css";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* TRENDING */}

        <Route
          path="/trending"
          element={
            <ProtectedRoute>
              <Trending />
            </ProtectedRoute>
          }
        />

        {/* PLAYLIST */}

        <Route
          path="/playlist"
          element={
            <ProtectedRoute>
              <Playlist />
            </ProtectedRoute>
          }
        />

        {/* CONTACT */}

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
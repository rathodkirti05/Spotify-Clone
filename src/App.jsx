// App.jsx

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./Login";

import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Playlist from "./pages/Playlist";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* LOGIN PAGE */}

        <Route
          path="/"
          element={<Login />}
        />

        {/* HOME PAGE */}

        <Route
          path="/home"
          element={<Home />}
        />

        {/* TRENDING PAGE */}

        <Route
          path="/trending"
          element={<Trending />}
        />

        {/* PLAYLIST PAGE */}

        <Route
          path="/playlist"
          element={<Playlist />}
        />

        {/* CONTACT PAGE */}

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* ABOUT PAGE */}

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
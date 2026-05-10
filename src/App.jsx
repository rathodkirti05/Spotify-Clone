// App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";

import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Playlist from "./pages/Playlist";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProtectedRoute from "./ProtectedRoute";
function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* LOGIN PAGE */}

       <Route path="/" element={<Login />} />
        {/* HOME */}

        <Route path="/home" element={<Home />} />
        {/* About us */}
<Route path="/about" element={<About />} />
        {/* TRENDING */}

        <Route path="/trending" element={<Trending />} />


        {/* PLAYLIST */}

       <Route path="/playlist" element={<Playlist />} />

        {/* CONTACT */}

       <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
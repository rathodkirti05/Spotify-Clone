import { Link } from "react-router-dom";

function Header() {

  // THEME TOGGLE

  const toggleTheme = () => {

    document.body.classList.toggle("light-mode");

  };

  // LOGOUT

  const logout = () => {

    sessionStorage.removeItem("user");

    window.location.href = "/";

  };

  return (

    <header className="header">

      {/* LOGO */}

      <h1 className="logo">
        SpotifyX 🎵
      </h1>

      {/* MENU */}

      <nav className="menu">

        <Link to="/home">
          Home
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/trending">
          Trending
        </Link>

        <Link to="/playlist">
          Playlist
        </Link>

        <Link to="/contact">
          Contact
        </Link>

      </nav>

      {/* RIGHT BUTTONS */}

      <div
        style={{
          display:"flex",
          gap:"15px",
          alignItems:"center"
        }}
      >

        {/* THEME BUTTON */}

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          🌙
        </button>

        {/* LOGOUT */}

        <button
          className="logout-btn"
          onClick={logout}
        >
          ↪
        </button>

      </div>

    </header>
  );
}

export default Header;
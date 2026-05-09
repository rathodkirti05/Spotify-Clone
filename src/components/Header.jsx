import { Link } from "react-router-dom"

function Header() {

  return (

    <header className="header">

      {/* LOGO */}

      <div className="logo">

        SpotifyX 🎵

      </div>

      {/* MENU */}

      <nav className="menu">

        <Link to="/">
          Home
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

    </header>

  )
}

export default Header
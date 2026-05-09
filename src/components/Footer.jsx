import { Link } from "react-router-dom"

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-content">

        <h2>
          SpotifyX 🎵
        </h2>

        <p>
          Enjoy Unlimited Music Anytime
        </p>

        {/* LINKS */}

        <div className="footer-links">

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

        </div>

        {/* COPYRIGHT */}

        <p className="copyright">
          © 2026 SpotifyX | Made with ❤️
        </p>

      </div>

    </footer>
  )
}

export default Footer
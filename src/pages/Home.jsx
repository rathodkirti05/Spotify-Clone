import { useNavigate } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"

function Home() {

  const navigate = useNavigate()

  return (

    <div>

      <Header />

      {/* HERO */}

      <section className="hero">

        <div className="overlay">

          <h1>
            Feel The Music 🎧
          </h1>

          <p>
            Listen your favorite songs anywhere
          </p>

          <button
            onClick={() => navigate("/trending")}
          >
            Explore Music
          </button>

        </div>

      </section>

      {/* FEATURES */}

      <section className="features">

        <div className="feature-card">

          <h2>
            Trending Songs 🔥
          </h2>

          <p>
            Listen top trending music worldwide
          </p>

        </div>

        <div className="feature-card">

          <h2>
            Playlist 🎶
          </h2>

          <p>
            Create and enjoy your playlists
          </p>

        </div>

        <div className="feature-card">

          <h2>
            Unlimited Music 🎧
          </h2>

          <p>
            Enjoy music anytime anywhere
          </p>

        </div>

      </section>

      <Footer />

    </div>
  )
}

export default Home
import { useEffect, useRef, useState } from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

function Trending() {

  const [songs, setSongs] = useState([])

  const [search, setSearch] = useState("arijit")

  const [play, setPlay] = useState(false)

  const [currentSong, setCurrentSong] = useState("")

  const [currentArtist, setCurrentArtist] = useState("")

  const [currentImage, setCurrentImage] = useState("")

  const [activeIndex, setActiveIndex] = useState(null)

  const audioRef = useRef(new Audio())

  // FETCH SONGS

  useEffect(() => {

    fetch(
      `https://itunes.apple.com/search?term=${search}&entity=song&limit=20`
    )
      .then((res) => res.json())
      .then((data) => {

        setSongs(data.results)
      })

  }, [search])

  // PLAY SONG

  const playSong = (item, index) => {

    // SAME SONG PLAY / PAUSE

    if (activeIndex === index && play) {

      audioRef.current.pause()

      setPlay(false)

      return
    }

    if (activeIndex === index && !play) {

      audioRef.current.play()

      setPlay(true)

      return
    }

    // NEW SONG

    audioRef.current.pause()

    audioRef.current = new Audio(item.previewUrl)

    audioRef.current.play()

    setPlay(true)

    setCurrentSong(item.trackName)

    setCurrentArtist(item.artistName)

    setCurrentImage(item.artworkUrl100)

    setActiveIndex(index)
  }

  // PLAYER BUTTON

  const togglePlay = () => {

    if (!currentSong) return

    if (play) {

      audioRef.current.pause()

      setPlay(false)

    } else {

      audioRef.current.play()

      setPlay(true)
    }
  }

  return (

    <div>

      <Header />

      {/* PAGE */}

      <div className="playlist-page page-space">

        <h1>
          Trending Songs 🔥
        </h1>

        {/* SEARCH */}

        <input
          type="text"
          placeholder="Search songs..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* SONG CARDS */}

        <div className="playlist-cards">

          {songs.map((item, index) => (

            <div
              className={`playlist-card ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >

              {/* IMAGE */}

              <div
                className="card-image"
                onClick={() => playSong(item, index)}
              >

                <img
                  src={item.artworkUrl100.replace("100x100", "600x600")}
                  alt=""
                />

                {/* PLAY BUTTON */}

                <button className="play-btn">

                  {play && activeIndex === index
                    ? "⏸"
                    : "▶"}

                </button>

              </div>

              {/* INFO */}

              <h3>
                {item.trackName}
              </h3>

              <p>
                {item.artistName}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* PLAYER */}

      <div className="player">

        <div className="left-player">

          <img
            src={
              currentImage ||
              "https://cdn-icons-png.flaticon.com/512/727/727245.png"
            }
            alt=""
          />

          <div>

            <h4>
              {currentSong || "No song playing"}
            </h4>

            <p>
              {currentArtist}
            </p>

          </div>

        </div>

        {/* CONTROLS */}

        <div className="controls">

          <button onClick={togglePlay}>
            {play ? "⏸ Pause" : "▶ Play"}
          </button>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Trending
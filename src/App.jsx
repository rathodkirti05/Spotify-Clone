import { useState, useRef } from "react"
import song from "./assets/song.mp3"

function App() {

  // 🎵 Songs list
  const songs = [
    { name: "Song 1", file: song },
    { name: "Song 2", file: song },
    { name: "Song 3", file: song }
  ]

  const [play, setPlay] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)
  const [currentSong, setCurrentSong] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [time, setTime] = useState(0)
  const [volume, setVolume] = useState(1)

  const audioRef = useRef(new Audio())

  // ▶️ play song
  const playSong = (file, index, name) => {
    audioRef.current.pause()
    audioRef.current = new Audio(file)
    audioRef.current.play()

    audioRef.current.volume = volume

    setActiveIndex(index)
    setCurrentIndex(index)
    setCurrentSong(name)
    setPlay(true)

    audioRef.current.ontimeupdate = () => {
      setTime(audioRef.current.currentTime)
    }
  }

  // ⏸️ pause
  const togglePlay = () => {
    if (play) {
      audioRef.current.pause()
      setPlay(false)
    }
  }

  // ⏭️ next
  const nextSong = () => {
    let nextIndex = currentIndex + 1
    if (nextIndex >= songs.length) nextIndex = 0

    playSong(songs[nextIndex].file, nextIndex, songs[nextIndex].name)
  }

  // ⏮️ previous
  const prevSong = () => {
    let prevIndex = currentIndex - 1
    if (prevIndex < 0) prevIndex = songs.length - 1

    playSong(songs[prevIndex].file, prevIndex, songs[prevIndex].name)
  }

  // 🔊 volume
  const changeVolume = (e) => {
    const value = e.target.value
    setVolume(value)
    audioRef.current.volume = value
  }

  return (
    <div className="app">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>Spotify</h2>
        <p>Home</p>
        <p>Search</p>
        <p>Library</p>
      </div>

      {/* MAIN */}
      <div className="main">
        <h1>Spotify Clone 🚀</h1>

        {/* SONG CARDS */}
        <div className="cards">
          {songs.map((item, index) => (
            <div
              key={index}
              className={`card ${activeIndex === index ? "active" : ""}`}
              onClick={() => playSong(item.file, index, item.name)}
            >
              {item.name}
            </div>
          ))}
        </div>

        {/* PLAYER */}
        <div className="player">

          {/* song info */}
          <div className="song-info">
            {currentSong || "No song playing"}
          </div>

          {/* controls */}
          <div className="controls">
            <button onClick={prevSong}>⏮️</button>

            <button onClick={togglePlay}>
              {play ? "Pause ⏸️" : "Play ▶️"}
            </button>

            <button onClick={nextSong}>⏭️</button>
          </div>

          {/* time */}
          <div className="time">
            {Math.floor(time)} sec
          </div>

          {/* volume */}
          <div>
            🔊
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={changeVolume}
            />
          </div>

        </div>

      </div>

    </div>
  )
}

export default App
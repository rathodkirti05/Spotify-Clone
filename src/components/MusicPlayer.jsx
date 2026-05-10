// src/components/MusicPlayer.jsx

import { useRef, useState } from "react";

function MusicPlayer() {

  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  // SONGS

  const songs = [

    {
      title: "Song 1",
      artist: "Artist 1",
      src: "/src/assets/song1.mp3"
    },

    {
      title: "Song 2",
      artist: "Artist 2",
      src: "/src/assets/song2.mp3"
    },

    {
      title: "Song 3",
      artist: "Artist 3",
      src: "/src/assets/song3.mp3"
    }

  ];

  const [currentSongIndex, setCurrentSongIndex] =
    useState(0);

  const currentSong = songs[currentSongIndex];

  // PLAY / PAUSE

  const togglePlay = () => {

    if (isPlaying) {

      audioRef.current.pause();

    } else {

      audioRef.current.play();

    }

    setIsPlaying(!isPlaying);
  };

  // NEXT SONG

  const nextSong = () => {

    const nextIndex =
      (currentSongIndex + 1) % songs.length;

    setCurrentSongIndex(nextIndex);

    setTimeout(() => {

      audioRef.current.play();

    }, 100);

    setIsPlaying(true);
  };

  // PREVIOUS SONG

  const prevSong = () => {

    const prevIndex =
      (currentSongIndex - 1 + songs.length)
      % songs.length;

    setCurrentSongIndex(prevIndex);

    setTimeout(() => {

      audioRef.current.play();

    }, 100);

    setIsPlaying(true);
  };

  return (

    <div
      style={{
        background: "#181818",
        padding: "30px",
        borderRadius: "20px",
        textAlign: "center",
        color: "white",
        width: "90%",
        maxWidth: "400px",
        margin: "40px auto"
      }}
    >

      <h2
        style={{
          marginBottom: "10px"
        }}
      >
        🎵 Music Player
      </h2>

      <h3>
        {currentSong.title}
      </h3>

      <p>
        {currentSong.artist}
      </p>

      {/* AUDIO */}

      <audio
        ref={audioRef}
        src={currentSong.src}
      />

      {/* BUTTONS */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginTop: "20px"
        }}
      >

        <button
          onClick={prevSong}
          style={buttonStyle}
        >
          ⏮
        </button>

        <button
          onClick={togglePlay}
          style={buttonStyle}
        >
          {
            isPlaying
              ? "⏸ Pause"
              : "▶ Play"
          }
        </button>

        <button
          onClick={nextSong}
          style={buttonStyle}
        >
          ⏭
        </button>

      </div>

    </div>
  );
}

// BUTTON STYLE

const buttonStyle = {

  padding: "12px 20px",

  border: "none",

  borderRadius: "12px",

  background: "#1db954",

  color: "white",

  fontSize: "16px",

  cursor: "pointer"
};

export default MusicPlayer;
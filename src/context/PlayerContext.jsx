import {
  createContext,
  useState
} from "react";

export const PlayerContext =
createContext();

function PlayerProvider({ children }) {

  const [currentSong,
  setCurrentSong] = useState(null);

  const [isPlaying,
  setIsPlaying] = useState(false);

  const [likedSongs,
  setLikedSongs] = useState([]);

  const playSong = (song) => {

    setCurrentSong(song);

    setIsPlaying(true);
  };

  const toggleLike = (song) => {

    const exists =
    likedSongs.find(
      (item)=>item.id===song.id
    );

    if(exists){

      setLikedSongs(
        likedSongs.filter(
          (item)=>item.id!==song.id
        )
      );

    }else{

      setLikedSongs([
        ...likedSongs,
        song
      ]);
    }
  };

  return (

    <PlayerContext.Provider
      value={{
        currentSong,
        setCurrentSong,
        isPlaying,
        setIsPlaying,
        playSong,
        likedSongs,
        toggleLike
      }}
    >

      {children}

    </PlayerContext.Provider>
  );
}

export default PlayerProvider;
import { useState } from "react";
import "../styles/MusicButton.css";

export default function MusicButton() {
  const [music, setMusic] = useState(false);

  const playMusic = () => {
    let pokemonMusic = document.querySelector(".pokemonMusic");

    if (music === true) {
      pokemonMusic.pause();
      setMusic(false);
    } else {
      pokemonMusic.play();
      setMusic(true);
    }
  };
  return (
    <>
      <button
        className="material-symbols-outlined musicButton"
        onClick={playMusic}
      >
        music_note{" "}
        <audio autoPlay loop className="pokemonMusic">
          <source
            src="../src/assets/audio/pokemon-music.mp4"
            type="audio/mpeg"
          />
        </audio>
      </button>
    </>
  );
}

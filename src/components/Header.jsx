import { useState } from "react";
import Test from "./ChooseDifficulty";
import "../styles/Header.css";

export default function Header() {
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
      <header className="header">
        <div className="headerOneContainer">
          <img
            src="https://img.icons8.com/?size=100&id=TYcqVDaDnqWb&format=png&color=000000"
            alt=""
            className="pokeBallPicture"
          />
          <h1 className="headerOne">PokeCard</h1>
          <button
            className="material-symbols-outlined musicButton"
            onClick={playMusic}
          >
            music_note{" "}
            <audio autoPlay loop className="pokemonMusic">
              <source src="../audio/pokemon-music.mp4" type="audio/mpeg" />
            </audio>
          </button>
        </div>
        <div className="headerTextContainer">
          <span className="currentScore">Score: 0</span>
          <span className="bestScore">Best Score: 0</span>
        </div>
      </header>
    </>
  );
}

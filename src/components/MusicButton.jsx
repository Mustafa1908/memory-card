import "../styles/MusicButton.css";

export default function MusicButton() {
  const playMusic = () => {
    let pokemonMusic = document.querySelector(".pokemonMusic");
    pokemonMusic.play();
  };

  const stopMusic = () => {
    let pokemonMusic = document.querySelector(".pokemonMusic");
    pokemonMusic.pause();
  };
  return (
    <>
      <button
        className="material-symbols-outlined musicButton"
        onClick={playMusic}
      >
        music_note{" "}
        <audio autoPlay loop className="pokemonMusic">
          <source src="pokemon-music.mp4" type="audio/mpeg" />
        </audio>
      </button>
      <button
        className="material-symbols-outlined musicButton"
        onClick={stopMusic}
      >
        music_off{" "}
      </button>
    </>
  );
}

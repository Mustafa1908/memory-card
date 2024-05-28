import MusicButton from "./MusicButton";
import "../styles/Header.css";

export default function Header() {
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
          <MusicButton />
        </div>
        <div className="headerTextContainer">
          <span className="currentScore">Score: 0</span>
          <span className="bestScore">Best Score: 0</span>
        </div>
      </header>
    </>
  );
}

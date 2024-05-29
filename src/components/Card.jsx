import "../styles/Card.css";

export default function Card({ pokemonName, pokemonImage }) {
  return (
    <div className="cardContainer">
      <img
        className="pokemonPicture"
        src={pokemonImage}
        alt="pokemon picture"
      />
      <span className="pokemonName">{pokemonName}</span>
    </div>
  );
}

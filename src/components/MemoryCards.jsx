import "../styles/MemoryCards.css";
import { useState } from "react";

function renderPokemonCard(cardArray, userScores, userBestScore) {
  let memoryCardsContainer = document.querySelector(".memoryCardsContainer");
  let currentScore = document.querySelector(".currentScore");
  let bestScore = document.querySelector(".bestScore");

  currentScore.innerText = "Score: " + userScores;
  bestScore.innerText = "Best Score: " + userBestScore;
  memoryCardsContainer.innerHTML = "";

  for (let i = 0; i < cardArray.length; i++) {
    let cardContainer = document.createElement("div");
    let pokemonImage = document.createElement("img");
    let pokemonName = document.createElement("span");

    cardContainer.className = "cardContainer";
    cardContainer.dataset.index = i;
    pokemonImage.className = "pokemonPicture";
    pokemonName.className = "pokemonName";
    pokemonName.innerText = cardArray[i][0];
    pokemonImage.src = cardArray[i][1];

    cardContainer.appendChild(pokemonImage);
    cardContainer.appendChild(pokemonName);
    memoryCardsContainer.appendChild(cardContainer);
  }
}

export default function MemoryCards() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [userScores, setUserScores] = useState(0);
  const [userBestScore, setUserBestScore] = useState(0);
  const [trueFalse, setTrueFalse] = useState(0);

  async function createCardsArray() {
    if (trueFalse === 8) {
      return pokemonArray;
    }

    let randomNumber = Math.floor(Math.random() * 1025) + 1;

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${randomNumber}/`
      );

      if (!response.ok) {
        throw new Error("Could not fetch resource");
      }

      const pokemonData = await response.json();
      const pokemonSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomNumber}.png`;
      let newPokemonArray = [pokemonData.name, pokemonSprite, false];

      setPokemonArray((pokemonArray) => [...pokemonArray, newPokemonArray]);
      setTrueFalse(trueFalse + 1);
    } catch (error) {
      console.error(error);
    }
  }

  createCardsArray();

  function shuffleArray(cardText) {
    let shuffleArray = pokemonArray.slice();

    for (let i = shuffleArray.length - 1; i > 0; i--) {
      // Generate random number
      let j = Math.floor(Math.random() * (i + 1));

      let temp = shuffleArray[i];
      shuffleArray[i] = shuffleArray[j];
      shuffleArray[j] = temp;
    }

    let exitLoop = 0;

    // Check if user won or lost
    while (exitLoop !== 1) {
      for (let i = shuffleArray.length - 1; i > 0; i--) {
        if (shuffleArray[i][0] === cardText) {
          if (shuffleArray[i][2] === true) {
            setPokemonArray([]);
            setTrueFalse(0);

            if (userBestScore < userScores) {
              setUserBestScore(userScores);
            }

            setUserScores(0);
            return;
          }

          shuffleArray[i][2] = true;
          setUserScores(userScores + 1);
          break;
        }
      }
      exitLoop++;
    }

    setPokemonArray(shuffleArray);
  }

  if (trueFalse === 8) {
    renderPokemonCard(pokemonArray, userScores, userBestScore);
  }

  document.addEventListener("click", function shuffleCards(e) {
    const target = e.target.closest(".cardContainer");
    if (target) {
      if (trueFalse > 0 && pokemonArray.length === 8) {
        shuffleArray(target.innerText);
        document.removeEventListener("click", shuffleCards);
        return;
      }
      document.removeEventListener("click", shuffleCards);
    }
  });

  return (
    <>
      <main className="main">
        <div className="memoryCardsContainer"></div>
      </main>
    </>
  );
}

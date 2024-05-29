import { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/MemoryCards.css";

export default function MemoryCards() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [userScores, setUserScores] = useState([0, 0]);
  const [trueFalse, setTrueFalse] = useState(0);
  let loader = document.querySelector(".loader");
  let dialog = document.querySelector("dialog");
  let winningDialog = document.querySelector(".dialog");

  async function createCardsArray() {
    if (trueFalse === 12) {
      return pokemonArray;
    } else if (loader !== null) {
      loader.style.display = "block";
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

  function gameLost(userScores, userScoresArray) {
    //Check if best score is beaten
    if (userScores[1] < userScores[0]) {
      userScoresArray[1] = userScoresArray[0];
    }

    userScoresArray[0] = 0;

    const closeButton = document.querySelector(".closeLose");

    dialog.style.display = "flex";
    dialog.showModal();

    closeButton.addEventListener("click", () => {
      dialog.close();
      dialog.style.display = "none";
    });

    setUserScores(userScoresArray);
    setPokemonArray([]);
    setTrueFalse(0);
  }

  function gameWon(userScoresArray) {
    userScoresArray[1] = userScoresArray[0] + 1;
    userScoresArray[0] = 0;

    const winningButton = document.querySelector(".closeWin");

    winningDialog.style.display = "flex";
    winningDialog.showModal();

    winningButton.addEventListener("click", () => {
      winningDialog.close();
      winningDialog.style.display = "none";
    });

    setPokemonArray([]);
    setTrueFalse(0);
    setUserScores(userScoresArray);
  }

  function addPoint(shuffleArray, userScoresArray, index) {
    shuffleArray[index][2] = true;
    userScoresArray[0] += 1;
    setUserScores(userScoresArray);

    return shuffleArray;
  }

  function shuffleArray(cardText) {
    let shuffleArray = pokemonArray.slice();

    for (let i = shuffleArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      let temp = shuffleArray[i];
      shuffleArray[i] = shuffleArray[j];
      shuffleArray[j] = temp;
    }

    let exitLoop = 0;

    // Check if user won or lost or need a point added
    while (exitLoop !== 1) {
      for (let i = 0; i < shuffleArray.length; i++) {
        if (shuffleArray[i][0] === cardText) {
          let userScoresArray = userScores.slice();

          if (shuffleArray[i][2] === true) {
            gameLost(userScores, userScoresArray);
            return;
          }

          if (userScoresArray[0] === 11) {
            gameWon(userScoresArray);
            return;
          }

          shuffleArray = addPoint(shuffleArray, userScoresArray, i);
          break;
        }
      }
      exitLoop++;
    }

    setPokemonArray(shuffleArray);
  }

  //Render user current score and user best score
  useEffect(() => {
    let currentScore = document.querySelector(".currentScore");
    let bestScore = document.querySelector(".bestScore");

    currentScore.innerText = "Score: " + userScores[0];
    bestScore.innerText = "Best Score: " + userScores[1];
  }, [userScores]);

  document.addEventListener("click", function shuffleCards(e) {
    const target = e.target.closest(".cardContainer");
    if (target) {
      if (trueFalse > 0 && pokemonArray.length === 12) {
        shuffleArray(target.innerText);
        document.removeEventListener("click", shuffleCards);
        return;
      }
      document.removeEventListener("click", shuffleCards);
    }
  });

  //If pokemon array is fully loaded render the score
  if (trueFalse === 12) {
    loader.style.display = "none";
  }

  return (
    <>
      <main className="main">
        <div className="memoryCardsContainer">
          {pokemonArray.map((pokemonData) => {
            if (pokemonArray.length === 12) {
              return (
                <Card
                  pokemonName={pokemonData[0]}
                  pokemonImage={pokemonData[1]}
                />
              );
            }
          })}
        </div>
      </main>
    </>
  );
}

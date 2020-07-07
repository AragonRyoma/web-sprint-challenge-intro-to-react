import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [playerOneArray, setPlayerOneArray] = useState("");
  const [playerTwoArray, setPlayerTwoArray] = useState("");
  const [toggle, setToggle] = useState(false);
  const [winner, setWinner] = useState(null);

  const ran = () => Math.floor(Math.random() * 82 + 1);

  const [playerOneRan, setPlayerOneRan] = useState(1);
  const [playerTwoRan, setPlayerTwoRan] = useState(2);
  useEffect(() => {
    // let playerOneRan = Math.floor(Math.random() * 82 + 1);
    // let playerTwoRan = Math.floor(Math.random() * 82 + 1);

    axios
      .get(`https://swapi.dev/api/people/ ${playerOneRan}`)
      .then((response) => {
        setPlayerOneArray(response.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://swapi.dev/api/people/ ${playerTwoRan}`)
      .then((response) => {
        setPlayerTwoArray(response.data);
      })
      .catch((err) => console.log(err));
  }, [playerOneRan, playerTwoRan]);

  useEffect(() => {
    const newWinner =
      Math.floor(Math.random() * 1) === 0 ? playerOneArray : playerTwoArray;
    setWinner(newWinner);
  }, [playerOneArray, playerTwoArray]);

  console.log(playerOneArray);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <button
        onClick={() => {
          setPlayerOneRan(ran());
          setPlayerTwoRan(ran());
          setToggle(false);
        }}
      >
        Randomize us!
      </button>

      <div className="cardHolder">
        <Character character={playerOneArray} />

        <p className="vs">VS</p>

        <Character character={playerTwoArray} />
      </div>
      <button className="battleButton" onClick={() => setToggle(true)}>
        Battle!
      </button>

      {toggle ? (
        <div className="winner">
          <p>And the winner is!</p>
          <Character character={winner} />
        </div>
      ) : null}
    </div>
  );
};

export default App;

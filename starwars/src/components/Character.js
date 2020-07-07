// Write your Character component here
import React from "react";

const Character = (props) => {
  let { character } = props;
  return (
    <div className="classCard">
      <div className="cardDiv">
        <h3> My name is {character.name}</h3>
        <p> I identify as {character.gender}</p>
        <p> I was born {character.birth_year}</p>
        <p>I am this tall {character.height}CM</p>
      </div>
    </div>
  );
};

export default Character;

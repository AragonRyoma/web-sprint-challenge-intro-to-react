// Write your Character component here
import React from "react";

const Character = (props) => {
  console.log(props.getDataArray, "props");
  return (
    <>
      {props.getDataArray.map((e, i) => {
        return (
          <div className="cardDiv" key={i}>
            <h3> My name is {e.name}</h3>
            <p> I identify as {e.gender}</p>
            <p> I was born {e.birth_year}</p>
            <p>I am this tall {e.height}CM</p>
          </div>
        );
      })}
    </>
  );
};

export default Character;

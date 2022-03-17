import React, { useState } from "react";
import "./UseState.css";

const UseState = () => {
  const [myName, setmyName] = React.useState("Shahrukh");

  const changeNameHandler = () => {
    // console.log(event.target.value);
    let name = myName;

    if (name === "Shahrukh") {
      setmyName("Tilwa");
    } else {
      setmyName("Shahrukh");
    }
  };
  return (
    <div className="back-ground">
      <div className="bg">
        <h1>{myName}</h1>
        <button onClick={changeNameHandler} value={myName}>
          Change Name
        </button>
      </div>
    </div>
  );
};

export default UseState;

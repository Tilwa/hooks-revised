import React, { useState } from "react";
import "./UseStateArray.css";

const UseStateArray = () => {
  const data = [
    {
      name: "Shahrukh",
      age: 29,
    },
    {
      name: "Ali",
      age: 22,
    },
  ];

  const [myArr, setMyArr] = React.useState(data);

  const removeFieldsHandler = () => {
    setMyArr([]);
  };
  return (
    <>
      <div className="back-ground">
        <div className="bg">
          {myArr.map((data) => (
            <h1 className="inputs">
              Name: {data.name} & Age: {data.age}{" "}
            </h1>
          ))}

          <button onClick={removeFieldsHandler}>clear fields</button>
        </div>
      </div>
    </>
  );
};

export default UseStateArray;

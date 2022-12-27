import React from "react";
import { useState, useEffect } from "react";

const Dictionary = () => {
  const [word, setWord] = useState("");

  useEffect(() => {
    console.log("State updated ", word);
  }); // limit what state useEffect cares about --> dependency array

  return (
    <>
      <h1>Let's find the definition for {word}</h1>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      ></input>
    </>
  );
};

export default Dictionary;

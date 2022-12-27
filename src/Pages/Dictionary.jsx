import React from "react";
import { useState, useEffect } from "react";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [word2, setWord2] = useState("");

  useEffect(() => {
    console.log("State updated ", word);
  }, [word]);

  useEffect(() => {
    console.log("State updated ", word2);
  }, [word2]);

  // no dependency array --> update for any state change
  // empty dependency array --> execute once
  // passing in data --> only execute when those state variables are changed

  return (
    <>
      <h1>Let's find the definition for {word}</h1>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <h1>Let's find the definition for {word2}</h1>
      <input
        type="text"
        onChange={(e) => {
          setWord2(e.target.value);
        }}
      />
    </>
  );
};

export default Dictionary;

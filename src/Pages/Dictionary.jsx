import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button
        onClick={() => {
          navigate("/definition/" + word, { replace: true });
        }}
      >
        Search
      </button>
    </>
  );
};

export default Dictionary;

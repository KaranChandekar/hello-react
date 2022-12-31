import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import DefinitionSearch from "../Components/DefinitionSearch";
import NotFound from "../Components/NotFound";

const Definition = () => {
  const [word, setWord] = useState();
  let { search } = useParams();
  const navigate = useNavigate();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // const url = "https://httpstat.us/501";
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;

    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        } else if (!response.ok) {
          setError(true);
          throw new Error("Something went wrong!");
        }
        return response.json();
      })
      .then((data) => {
        setWord(data[0].meanings);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  if (notFound === true) {
    return (
      <div>
        <NotFound />
        <Link to="/dictionary">Search another</Link>
      </div>
    );
  } else if (error === true) {
    return (
      <div>
        <p>Something went wrong! Try again.</p>
        <Link to="/dictionary">Search another</Link>
      </div>
    );
  }

  return (
    <div>
      {word ? (
        <div>
          <h1>Here is the definition:</h1>
          {word.map((meaning) => {
            return (
              <p key={uuidv4()}>
                {meaning.partOfSpeech + ": "}
                {meaning.definitions[0].definition}
              </p>
            );
          })}
          <p>Search again:</p>
          <DefinitionSearch />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Definition;

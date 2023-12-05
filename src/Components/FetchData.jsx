import { useEffect, useState } from "react";
import Definition from "./Definition";
import Dictonary from "./Dictonary";

function FetchData() {
  const [word, setWord] = useState("Hello");
  const [main, setMain] = useState([]);
  const [audio, setAudio] = useState("");
  const [all, setAll] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const response = await data.json();
    setAudio(response[0].phonetics[0].audio);
    setMain(response);
    setAll(response[0]);
  };

  useEffect(() => {
    // fetchData();
  }, []);

  function SearchWord() {
    fetchData();
    setWord("");
  }

  return (
    <>
      <header>
        <div id="titleBar">
          <h1>Pocket Dictonary</h1>
        </div>
        <div id="searchSection">
          <label>
            <input
              type="text"
              placeholder="Type your word?"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
          </label>
          <button onClick={SearchWord}>Search</button>
        </div>
      </header>
      <div id="mainSection">
        <Dictonary main={main} all={all} audio={audio} />
      </div>
    </>
  );
}

export default FetchData;

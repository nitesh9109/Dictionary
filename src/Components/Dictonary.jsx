import { memo } from "react";
import Definition from "./Definition";
import Examples from "./Examples";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

function Dictonary({ main, all, audio }) {
  console.log("main title", all.word);
  return (
    <>
      <h1 id="main_title">{all.word}</h1>
      <div id="audio_container">
        {audio ? <audio controls src={audio}></audio> : <div></div>}
      </div>
      <div id="meaning_Def">
        <h3>Meaning & Definitions :</h3>
      </div>
      <div id="lists">
        <ol>
          <Definition main={main} />
        </ol>
      </div>

      <div id="meaning_Def">
        <h3>Examples :</h3>
      </div>
      <div id="examples">
        <ol>
          <Examples main={main} />
        </ol>
      </div>

      <div id="meaning_Def">
        <h3>Synonyms :</h3>
      </div>
      <div id="examples">
        <ol>
          <Synonyms main={main} />
        </ol>
      </div>

      <div id="meaning_Def">
        <h3>Antonyms :</h3>
      </div>
      <div id="examples">
        <ol>
          <Antonyms main={main} />
        </ol>
      </div>
    </>
  );
}

export default memo(Dictonary);

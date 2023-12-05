import React from "react";

function Synonyms({ main }) {
  return (
    <>
     {main.map((val) => {
        return val.meanings.map((mean) => {
          return mean.synonyms.map((antony, index) => {
            return <li key={index}>{antony}</li>;
          });
        });
      })}
    </>
  );
}

export default Synonyms;

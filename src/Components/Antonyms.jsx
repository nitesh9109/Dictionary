import React from "react";

function Antonyms({ main }) {
  return (
    <>
      {main.map((val) => {
        return val.meanings.map((mean) => {
          return mean.antonyms.map((antony, index) => {
            return <li key={index}>{antony}</li>;
          });
        });
      })}
    </>
  );
}

export default Antonyms;

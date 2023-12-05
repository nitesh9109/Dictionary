import React from "react";
import { memo } from "react";

function Definition({ main }) {
  console.log(main);

  return (
    <>
      {main.map((val) => {
        return val.meanings.map((mean) => {
          return mean.definitions.map((def, index) => {
            return <li key={index}>{def.definition}</li>;
          });
        });
      })}
    </>
  );
}

export default memo(Definition);

import React from "react";

function Examples({ main }) {
  return (
    <>
      {main.map((val) => {
        return val.meanings.map((mean) => {
          return mean.definitions.map((def, index) => {
            return (
              <>
                 {def.example ? <li key={index}>{def.example}</li> : ""}
             </>
            );
          });
        });
      })}
    </>
  );
}

export default Examples;

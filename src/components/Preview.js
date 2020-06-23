import React from "react";
import Character from "./character/Character";

function Preview(props) {
  const { database, characters } = props;
  let charactersList = characters.split("").map((char, id) => {
    if (char.charCodeAt() === 32) {
      char = "space";
    }
    if (char.charCodeAt() === 9829) {
      char = "heart";
    }
    return <Character key={`${id}${char}`} database={database} value={char} />;
  });
  return (
    <div className="preview-container">
      <h1>Preview</h1>
      <div className="container">
        <div className="pixy-chars">{charactersList}</div>
      </div>
    </div>
  );
}

export default Preview;

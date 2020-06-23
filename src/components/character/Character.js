import React from "react";
import BlocksRow from "./BlocksRow";

function Character(props) {
  const { database, value } = props;
  const char = database[value].map((blocksRow, id) => (
    <BlocksRow key={blocksRow + id} data={blocksRow}></BlocksRow>
  ));
  return <div className="char">{char}</div>;
}

export default Character;

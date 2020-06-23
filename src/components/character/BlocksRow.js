import React from "react";
import Block from "./Block";

function BlocksRow(props) {
  const { data } = props;
  const blocksRow = data
    .split("")
    .map((block, id) => <Block key={block + id} data={block} />);
  return <div className="blocks-row">{blocksRow}</div>;
}

export default BlocksRow;

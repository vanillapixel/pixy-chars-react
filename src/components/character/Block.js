import React from "react";

function Block(props) {
  const { data } = props;
  return <div className={data === "o" ? "on block" : "off block"}></div>;
}

export default Block;

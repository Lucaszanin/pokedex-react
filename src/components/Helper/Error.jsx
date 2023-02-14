import React from "react";
import errorGif from "./Assets/error.gif";

function Error(error) {
  if (!error) return null;
  return (
    <div>
      <img src={errorGif} />
      <h1>Ops Pokemon Not Found</h1>
    </div>
  );
}

export default Error;

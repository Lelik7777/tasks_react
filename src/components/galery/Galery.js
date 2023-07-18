import { sculptureList } from "./data.js";
import { useState } from "react";

export default function Gallery() {
  //let index = 0;
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [isDone, setIsDone] = useState(false);

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  function handleClick() {
    // index = index + 1;
    if (hasNext) //setIsDone(true);
    setIndex(index + 1);

  }
  function handleClickBack() {
    // index = index + 1;
    if (hasPrev) //setIsDone(false);
    setIndex(index - 1);

  }
  function handleMoreClick() {
    setShowMore(!showMore);
  }
  let sculpture = sculptureList[index];

  return (
    <>
      <button disabled={!hasNext} onClick={handleClick}>
        Next
      </button>
      <button disabled={!hasPrev} onClick={handleClickBack}>
        Back
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}

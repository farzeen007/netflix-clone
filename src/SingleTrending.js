import React from "react";

function SingleTrending({ poster_path, basePath, handleClick }) {
  return (
    <>
      <img
        className="row-poster"
        src={`${basePath}${poster_path}`}
        alt="something wrong"
        onClick={handleClick}
      />
    </>
  );
}

export default SingleTrending;

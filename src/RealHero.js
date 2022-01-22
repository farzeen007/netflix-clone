import React, { useState, useEffect } from "react";
import requests from "./requests";
import { basePath } from "./requests";

function RealHero() {
  const [movie, setMovie] = useState([]);
  const fetchData = async () => {
    {
      let response = await fetch(requests.netflixOriginals);
      let json = await response.json();
      setMovie(
        json.results[Math.floor(Math.random() * json.results.length - 1)]
      );
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div
      className="hero-image-container"
      style={{ backgroundImage: `url(${basePath}${movie.backdrop_path})` }}
    >
      {console.log(movie)}
    </div>
  );
}

export default RealHero;

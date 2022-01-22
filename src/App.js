import React, { useState } from "react";
import TrendingMovies from "./TrendingMovies";
import Hero from "./Hero";
import requests from "./requests";
import NavBar from "./NavBar";
import DarkMode from "./DarkMode";

function App() {
  const [loading, setLoading] = useState(false);
  const [currentStyle, setCurrentStyle] = useState("dark");
  let netflixOriginals = requests.netflixOriginals;
  let trending = requests.trending;
  let romanceMovies = requests.romanceMovies;
  const getMode = (mode) => {
    if (mode === false) {
      setCurrentStyle("dark-mode");
    } else if (mode === true) {
      setCurrentStyle("light-mode");
    }
  };
  return (
    <div className={currentStyle}>
      <NavBar />
      <Hero />
      <TrendingMovies
        loading={loading}
        setLoading={setLoading}
        name="NETFLIX ORIGINALS"
        url={netflixOriginals}
      />
      <DarkMode getMode={getMode} />
      <TrendingMovies name="Trending Now" url={trending} />
      <TrendingMovies name="Romace Movies" url={romanceMovies} />
    </div>
  );
}

export default App;

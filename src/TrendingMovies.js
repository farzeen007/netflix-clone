import React, { useState, useEffect } from "react";
import SingleTrending from "./SingleTrending";
import "./index.css";
import { basePath } from "./requests";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function TrendingMovies({ url, name, loading, setLoading }) {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, [url]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const fetchData = async () => {
    {
      let response = await fetch(url);
      let json = await response.json();
      setTrendingMovies(json.results);
      loading && setLoading(false);
    }
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log(urlParams);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div>
      <h1>{name}</h1>
      <div className="row">
        {!loading ? (
          trendingMovies.map((item) => {
            return (
              <SingleTrending
                basePath={basePath}
                key={item.id}
                {...item}
                handleClick={() => handleClick(item)}
              ></SingleTrending>
            );
          })
        ) : (
          <h1>Loading.....</h1>
        )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default TrendingMovies;

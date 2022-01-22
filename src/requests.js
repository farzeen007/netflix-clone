import React from "react";

export const baseURL = "https://api.themoviedb.org/3/";
export const basePath = "https://image.tmdb.org/t/p/w500/";

const requests = {
  netflixOriginals: `${baseURL}discover/tv?api_key=${`503010e6a152cc58ada607ba4af1eac8`}&with_networks=213`,
  trending: `${baseURL}trending/all/week?api_key=${`503010e6a152cc58ada607ba4af1eac8`}&language=en-US`,
  topRated: `${baseURL}movie/top_rated?api_key=${`503010e6a152cc58ada607ba4af1eac8`}&language=en-US`,
  actionMovies: `${baseURL}discover/movie?api_key=${`503010e6a152cc58ada607ba4af1eac8`}&with_genres=28`,  
  horrorMovies: `${baseURL}discover/movie?api_key=${`503010e6a152cc58ada607ba4af1eac8`}&with_genres=27`,
  romanceMovies: `${baseURL}discover/movie?api_key=${`503010e6a152cc58ada607ba4af1eac8`}&with_genres=10749`,
  documentaries: `${baseURL}discover/movie?api_key=${`503010e6a152cc58ada607ba4af1eac8`}&with_genres=99`,
};

export default requests;

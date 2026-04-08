import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";

const API_KEY = "030b783e46e3ca5e527c01beaf0b2aba";

function Home({ addToFav }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

//loading popular movies
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // check in console
        setMovies(data.results);
      });
  }, []);

  const searchMovies = async () => {
    if (!query) return;

    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );

    const data = await res.json();
    console.log(data); 

    setMovies(data.results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search movie..."
        value={query} 
        onChange={(e) => setQuery(e.target.value)}/>

      <button onClick={searchMovies}>Search</button>

      <MovieList movies={movies} addToFav={addToFav} />
    </div>
  );
}

export default Home;
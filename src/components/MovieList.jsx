import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, addToFav }) {
  return (
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} addToFav={addToFav} />
      ))}
    </div>
  );
}

export default MovieList;
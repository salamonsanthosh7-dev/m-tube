import React from "react";

function MovieCard({ movie, addToFav }) {
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.vote_average}</p>
      <button onClick={() => addToFav(movie)}>❤️ Favorite</button>
    </div>
  );
}

export default MovieCard;
import React from "react";

function MovieCard({ movie, addToFav }) {
  return (
    <div className="card">
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
        : "https://via.placeholder.com/200"}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.vote_average}</p>
      <button onClick={() => addToFav(movie)}>❤️ Favorite</button>
    </div>
  );
}

export default MovieCard;

import React from "react";


function Favorites({ favorites, removeFromFav }) {
  
  return (
    <div >
      <h2>My Favorites ❤️</h2>
        <div className="fav">
      {favorites.map((movie) => (
        
        <div  key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <button onClick={() => removeFromFav(movie.id)}>
            Remove
          </button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Favorites;
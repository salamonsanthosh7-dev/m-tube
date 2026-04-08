import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [favorites, setFavorites] = useState([]);
  
  const removeFromFav = (id) => {
  const updated = favorites.filter((movie) => movie.id !== id);
  setFavorites(updated);
  localStorage.setItem("fav", JSON.stringify(updated));
};


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("fav")) || [];
    setFavorites(data);
  },[]);

  const addToFav = (movie) => {
  const exists = favorites.find((m) => m.id === movie.id);
  if (exists) return;

  const updated = [...favorites, movie];
  setFavorites(updated);
  localStorage.setItem("fav", JSON.stringify(updated));
};

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "home" && <Home addToFav={addToFav} />}
      {page === "fav" && (
  <Favorites 
    favorites={favorites} 
    removeFromFav={removeFromFav} 
  />
)}
    </div>
  );
}

export default App;
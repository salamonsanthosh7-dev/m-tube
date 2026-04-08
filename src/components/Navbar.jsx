import React from "react";

function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <h2>🎬 M-TUBE</h2>
      <div>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("fav")}>Favorites</button>
      </div>
    </nav>
  );
}

export default Navbar;
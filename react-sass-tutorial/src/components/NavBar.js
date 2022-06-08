import React from "react";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/profile">Profile</a>
        <a href="/contents">Contents</a>
      </div>
    </div>
  );
}

export default NavBar;

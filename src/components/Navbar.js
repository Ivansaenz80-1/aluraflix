import React from "react";
import { Link } from "react-router-dom";
import "./../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">AluraFlix</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/nuevo-video">Nuevo Video</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;



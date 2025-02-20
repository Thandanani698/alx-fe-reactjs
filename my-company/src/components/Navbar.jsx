import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#333",
    color: "white",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    margin: "0 10px",
  };

  return (
    <nav style={navbarStyle}>
      <h2>My Company</h2>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

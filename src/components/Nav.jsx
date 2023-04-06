import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
// Link tag Perameter to and url to that link import
//
const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
    </div>
  );
};

export default Nav;
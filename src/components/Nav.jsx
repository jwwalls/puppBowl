import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Form from "./Form";
// Link tag Perameter to and url to that link import
//
const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Form />
    </div>
  );
};

export default Nav;
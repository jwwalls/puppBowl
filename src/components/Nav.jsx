import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Form from "./Form";
// Link tag Perameter to and url to that link import
//
const Nav = () => {
  return (
    <div className="headerL" >
      <div className="logoBanner">
      <img src="/src/components/posters/logo.png" alt="logo" />
      <Link class="Navlink" to="/">PUPPY BOWL</Link>
      </div>    
      <div class="NavSlogan">Love Care Friend Play All At Pupply Bowl</div>
      <Form />
    </div>
  );
};

export default Nav;
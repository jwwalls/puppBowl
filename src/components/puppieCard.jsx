import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
// UseNavigate()
const PuppieCard = ({ id, name, breed, imageUrl }) => {
  const nav = useNavigate();
  return (
    <div className="MainCard">
      <div className="nameId">
        <h6>{id}</h6>
        <h1>{name}</h1>
      </div>

      <div>
        <h3>{breed}</h3>
        <img src={imageUrl} alt="" />
      </div>
      <button onClick={() => nav(`/${id}`)}>More Info</button>
    </div>
  );
};

export default PuppieCard;
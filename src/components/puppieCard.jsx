import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
// UseNavigate()
const PuppieCard = ({ id, name, breed, imageUrl }) => {
  const nav = useNavigate();
  return (
    <div className="MainCard">
      <div className="nameId">
        <img src={imageUrl} alt="" />
        <div className="dogId">
          <div className="doggoName"> {name}</div>
          <div>Id: {id}</div>
        </div>
      </div>

      <div className="breedInfo">
        <div>
          <div>Breed Information</div>
          <div>{breed}</div>
        </div>

        <button className="daButton" onClick={() => nav(`/${id}`)}>
          More Info
        </button>
      </div>
    </div>
  );
};

export default PuppieCard;

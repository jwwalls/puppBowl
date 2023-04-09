import React, { useEffect, useState } from "react";
import PuppieCard from "./puppieCard";
import { fetchAllPuppies } from "../API/fetchPuppys";
import "../App.css";

const Home = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getAllPuppies = async () => {
      const players = await fetchAllPuppies();
      setPlayers(players);
      
    };
    getAllPuppies();
  }, []);

  return (
   
    <div className="homeContainer">
        <div className="AllPuppies">
        {players.map(({ id, name, breed, status, imageUrl }) => (
        <div key={id}>
          <PuppieCard
            id={id}
            name={name}
            breed={breed}
            status={status}
            imageUrl={imageUrl}
          />
        </div>
      ))}
        </div>
     
      <div className="posterBox">
                    <img src="/src/components/posters/poster1.png" alt="" />{" "}
                    <img src="/src/components/posters/poster2.png" alt="" />{" "}
                </div>
    </div>
  );
};

export default Home;
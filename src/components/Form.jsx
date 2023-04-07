import React, { useEffect, useState } from "react";
import { fetchAllPuppies } from "../API/fetchPuppys";
import PuppieCard from "./puppieCard";
import "../App.css";

const Form = () => {
    const [puppies, setPuppies] = useState([]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const puppyName = formData.get("puppyName");
        const breed = formData.get("breed");
        console.log("Puppy Name:", puppyName);
        console.log("Breed:", breed);
        await getAllPuppies(puppyName, breed);
      };
      
    const getAllPuppies = async (puppyName, breed) => {
        const players = await fetchAllPuppies();
        const filteredPuppies = players.filter((puppy) => {
          return (
            puppy.name.toLowerCase().includes(puppyName.toLowerCase()) &&
            puppy.breed.toLowerCase().includes(breed.toLowerCase())
          );
        });
        setPuppies(filteredPuppies);
      };
      
    useEffect(() => {
        const getAllPuppies = async () => {
          const players = await fetchAllPuppies();
          
          console.log(players);
          
        };
        getAllPuppies();
      }, []);
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="puppyName">Puppy Name: </label>
          <input type="text" name="puppyName" placeholder="Name"></input>
          <label htmlFor="breed">Breed: </label>
          <input type="text" name="breed" placeholder="Breed"></input>
          <button type="submit">Submit</button>
        </form>
        {puppies.map(({ id, name, breed, status, imageUrl }) => (
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
      
    );
  };
  

export default Form;
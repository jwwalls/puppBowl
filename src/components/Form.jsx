import React from "react";
import "../App.css";

const Form = () => {
  return (
    <div>
      <form>
        <label htmlFor="PuppyName">Puppy Name: </label>
        <input type="text" placeholder="Name"></input>
        <label htmlFor="Breed">Breed: </label>
        <input type="text" placeholder="Breed"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
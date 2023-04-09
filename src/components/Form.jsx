import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Loading from './Loading';

const Form = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("name");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(`/search/${searchBy}/${searchTerm}`);
    }, 2000);
  };

  return (
    <div>
      {loading ? <Loading /> : null}
      <form className="formCon" onSubmit={handleSubmit}>
        <label className="inputForm" htmlFor="searchBy">Search by: </label>
        <select
          value={searchBy}
          onChange={(e) => setSearchBy(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="breed">Breed</option>
        </select>
        <input
          type="text"
          placeholder={`Search by ${searchBy}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Form;
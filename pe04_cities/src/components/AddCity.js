import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCity({ setCities }) {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setCities((prev) => [
      ...prev,
      { id: prev.length + 1, name, country, population }
    ]);
      navigate("/cities");
  };

  return (
    <div className="form-container">
      <h2>Add City</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} required />
        <input type="text" placeholder="Population" value={population} onChange={(e) => setPopulation(e.target.value)} required />
        <button type="submit">Add City</button>
      </form>
    </div>
  );
}

export default AddCity;

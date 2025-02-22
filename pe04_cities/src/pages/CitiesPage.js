import React from "react";
import { Link } from "react-router-dom";

function CitiesPage({ cities }) {
  return (
    <div>
      <h1>Cities</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            <Link to={`/cities/${city.id}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add-city">
        <button>Add City</button>
      </Link>
    </div>
  );
}

export default CitiesPage;

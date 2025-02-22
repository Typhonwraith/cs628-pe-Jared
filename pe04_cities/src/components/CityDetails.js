import React from "react";
import { useParams, Link } from "react-router-dom";

function CityDetails({ cities }) {
  const { id } = useParams();
  const city = cities.find((c) => c.id === parseInt(id));

  if (!city) {
    return <h2>City not found!</h2>;
  }

  return (
    <div>
      <h2>{city.name}</h2>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
      <Link to="/cities">
        <button>Back to Cities</button>
      </Link>
    </div>
  );
}

export default CityDetails;

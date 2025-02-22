import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import CitiesPage from "./pages/CitiesPage";
import CityDetails from "./components/CityDetails";
import AddCity from "./components/AddCity";
import "./App.css";

function App() {
  const [cities, setCities] = useState([
    { id: 1, name: "New York", country: "USA", population: "8.4M" },
    { id: 2, name: "London", country: "UK", population: "9M" },
    { id: 3, name: "Tokyo", country: "Japan", population: "14M" }
  ]);

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <h1>Cities Application</h1>
          <div className="nav-links">
            <Link to="/cities">Cities List</Link>
            <Link to="/add-city">Add City</Link>
          </div>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/cities" />} />
            <Route path="/cities" element={<CitiesPage cities={cities} />} />
            <Route path="/cities/:id" element={<CityDetails cities={cities} />} />
            <Route path="/add-city" element={<AddCity setCities={setCities} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

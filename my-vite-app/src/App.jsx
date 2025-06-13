// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEntry from "./pages/AddEntry";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  const [trips, setTrips] = useState([
    {
      id: 1,
      title: "Manali",
      description: "A beautiful hill station nestled in the Himalayas.",
      image: "https://source.unsplash.com/400x300/?manali,hills"
    },
    {
      id: 2,
      title: "Paris",
      description: "The romantic city of lights and the Eiffel Tower.",
      image: "https://source.unsplash.com/400x300/?paris,france"
    }
  ]);

  const addTrip = (newTrip) => {
    setTrips([...trips, { ...newTrip, id: trips.length + 1 }]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home trips={trips} />} />
        <Route path="/add" element={<AddEntry onAddTrip={addTrip} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

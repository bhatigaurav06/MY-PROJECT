import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEntry = ({ onAddTrip }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTrip({ title, description, image });
    navigate("/"); // Redirect to home
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Trip</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label>Image URL:</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />

        <button type="submit" style={{ marginTop: "10px" }}>Add Trip</button>
      </form>
    </div>
  );
};

export default AddEntry;

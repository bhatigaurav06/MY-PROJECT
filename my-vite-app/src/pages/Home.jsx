// src/pages/Home.jsx
import React from 'react';
import TripCard from '../components/TripCard';
import manaliImg from '../assets/manali.jpg';
import parisImg from '../assets/paris.jpg'; // ✅ Corrected line

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Explore Destinations</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        marginTop: '20px'
      }}>
        <TripCard
          image={manaliImg}
          title="Manali"
          description="A beautiful hill station nestled in the Himalayas."
        />
        <TripCard
          image={parisImg}
          title="Paris"
          description="The romantic city of lights and the Eiffel Tower."
        />
      </div>
    </div>
  );
};

export default Home;

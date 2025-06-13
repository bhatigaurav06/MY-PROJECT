import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="navbar">
        <div className="logo">CARZONE</div>
        <a href="#home">HOME</a>
        <a href="#service">SERVICE</a>
        <a href="#featured">FEATURED CARS</a>
        <a href="#new">NEW CARS</a>
        <a href="#contact">CONTACT</a>
      </div>

      <div id="home" className="hero-section">
        <h1>
          GET YOUR <span className="highlight">DREAM CAR</span> AT A <span className="highlight">DREAM PRICE</span>
        </h1>
        <p className="subtext">The largest inventory of cars in Northern India</p>
        <a href="tel:+919999999999" className="cta-button">CONTACT US</a>
      </div>

      <div id="service" className="info-section">
        <h2>Our Services</h2>
        <p>We provide car financing, insurance, servicing, and more to make your purchase stress-free.</p>
      </div>

      <div id="featured" className="info-section">
        <h2>Featured Cars</h2>
        <p>Explore our top-rated, most loved luxury and economy cars.</p>
      </div>

      <div id="new" className="info-section">
        <h2>New Arrivals</h2>
        <p>Check out the latest additions to our inventory updated weekly.</p>
      </div>

      <div id="contact" className="info-section">
        <h2>Contact Information</h2>
        <p>Phone: +91 99999 99999</p>
        <p>Email: info@carzone.in</p>
        <p>Location: New Delhi, India</p>
      </div>
    </>
  );
}

export default App;

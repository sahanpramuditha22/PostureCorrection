// src/Profile.js
import React, { useState, useEffect } from 'react';
import './Home.css';  // Ensure you create and import a CSS file for styling
import propic from '../../src/Stores/propic.jpg'
import Footer from './Footer';
const images = [
  require('../Stores/image11.webp'),
  require('../Stores/image13.jpeg'),
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Start with the first image

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change active image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1> Posture Correction </h1>
      </header>
      <div className="image-slider-container">
        <div className="image-slider">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Posture Correction"
              className={`slider-image ${index === activeIndex ? 'active' : 'inactive'}`}
            />
          ))}
        </div>
      </div>
      <main className="home-main">
      <section className="contact-section">
      <h2>Patient information</h2>
      <div className="profile-pic-container">
        <img src={propic} alt="Profile Picture" className="profile-pic" ></img></div>

      {/* First division-container */}
      <div className="division-container">
        <div className="division">
          <label htmlFor="patient-name">Patient Name:</label>
          <input type="text" id="patient-name" name="patient-name" value={"Piyumi Hansamali"} />
        </div>

        <div className="division">
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" name="age" value={"35"}/>
        </div>
      </div>

      {/* Second division-container */}
      <div className="division-container">
        <div className="division">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender">
            <option value="male">Female</option>
            <option value="female">Male</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="division">
          <label htmlFor="time-duration">Time Duration:</label>
          <input type="text" id="time-duration" name="time-duration" value={"12 months"}/>
        </div>
      </div>

      {/* Button container */}
      <div className="button-container">
        <button type="button" className="button">Edit Pateint Details</button>
        <button type="button" className="button">Contact Pateint</button>
      </div>

    
    </section>
      </main>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;

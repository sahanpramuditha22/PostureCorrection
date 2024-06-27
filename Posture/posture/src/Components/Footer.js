import React from 'react';
import './Footer.css';

const Footer = () => {
  const doctorName = "Dr. John Doe";
  const email = "drjohndoe@example.com";
  const contactNumber = "+1234567890";
  const about = "10 Years Experience with Posture Correction, Specialist in Physio";

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="doctor-info">
            <h4>{doctorName}</h4>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Contact:</strong> {contactNumber}</p>
          </div>
          <div className="about">
            <h4>About</h4>
            <p>{about}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

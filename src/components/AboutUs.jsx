// src/components/AboutUs.jsx
import React from "react";
import missionIllustration from "../assets/mission-illustration.png";
import visionIllustration from "../assets/vision-illustration.png";

export default function AboutUs() {
  return (
    <section id="about" className="about-wrapper">
      
      {/* ABOUT US */}  
      <h2 className="section-title"> ABOUT US</h2>
      <p className="about-text"> Doppelganger, founded in 2014, has emerged as a leading provider in the telesecurity sector. We supply and service a comprehensive range of products, including CCTV cameras, biometric attendance systems, access control solutions, fire alarm units, PA systems, video door phones, EPABX/IPABX systems, projectors, speakers, printers, scanners, POS devices, and networking equipment. With a strong focus on quality, modern technology, and professional expertise, we ensure reliable performance and have successfully built a wide and satisfied client network.</p>

      {/* MISSION */}
      <div className="about-mission-row">
        <img
          src={missionIllustration}
          alt="mission"
          className="mission-img"
        />

        <div className="mission-box">
          <h2 className="section-title">MISSION</h2>
          <p className="about-text">  To be a customer convenient team, with  the help of technology we make our  
            customers to feel safe. To be the most  successful and customer convenient  company in our sector </p>
        </div>
      </div>

      {/* VISION */}
      <div className="vision-row">
        <div className="vision-text">
          <h2 className="section-title">VISION</h2>
          <p className="about-text"> By implementing powerful research and  development capabilities, 
            we want to  become the best organization and  technology provider, providing clients  with new technology and 
            innovative  business solutions </p>
        </div>

        <img
          src={visionIllustration}
          alt="Vision illustration"
          className="vision-image"
        />
      </div>
    </section>
  );
}

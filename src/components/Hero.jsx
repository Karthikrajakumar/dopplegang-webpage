import React from "react";
import cctv from "../assets/cctv.png";
import linkIcon from "../assets/link-icon.png";
import BlueArc from "../assets/blue-arc.png"; 

export default function Hero() {
  return (
    <section className="hero-outer">
      <div className="hero-center">
        <div>
          <div>
            <div className="hero-content">
              <h1 className="hero-title">
                SMART SURVEILLANCE ACCESS <br/> CONTROL &
                <span className="accent">
                  TECH SERVICES <br />  
                </span>
                <span className="accent"> UNDER ONE ROOF</span>
              </h1>

              <button
                className="btn-contact"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                CONTACT US 
                <img
                  src={linkIcon}
                  alt="arrow"
                  className="btn-contact-icon"
                />
              </button>
            </div>

            {/* ✅ IMAGE-BASED BLUE ARC (REPLACES CSS ARC) */}
            <img
              src={BlueArc}
              alt=""
              className="blue-arc-img"
              aria-hidden="true"
            />

          

            {/* ✅ CCTV */}
            <img src={cctv} alt="CCTV camera" className="cctv-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

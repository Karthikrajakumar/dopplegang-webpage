// src/components/Features.jsx
import React from "react";
import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";
import icon4 from "../assets/icons/icon4.png";
import icon5 from "../assets/icons/icon5.png";

/*
  PASTE THIS COMPONENT ABOVE <Products /> in your page.
  Example: <Features /> then <Products />
*/

const FEATURES = [
  {
    id: 1,
    img: icon1,
    title: "In-Depth Industry",
    sub: "Knowledge",
  },
  {
    id: 2,
    img: icon2,
    title: "Timely Completion",
    sub: "of order",
  },
  {
    id: 3,
    img: icon3,
    title: "Transparent",
    sub: "Business Dealings",
  },
  {
    id: 4,
    img: icon4,
    title: "Qualified and",
    sub: "Trained Team Of ",
    sub1: "Professional",

    

  },
  {
    id: 5,
    img: icon5,
    title: "Market Leading",
    sub: "price",
  },
];

export default function Features() {
  return (
    <section className="features-row" aria-label="Our strengths">
      <div className="features-grid">
        {FEATURES.map((f) => (
          <div className="feature-tile" key={f.id}>
            <span className="feature-icon" aria-hidden>
              <img src={f.img} alt={f.title} />
            </span>
            <div className="feature-title">{f.title}</div>
            {f.sub && <div className="feature-sub">{f.sub}</div>}
            {f.sub1 && <div className="feature-sub1">{f.sub1}</div>}
          </div>
        ))} <br></br>
      </div>
    </section>
  );
}

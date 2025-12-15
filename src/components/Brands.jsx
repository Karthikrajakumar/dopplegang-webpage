// src/components/Brands.jsx
import React from "react";
import "./brands.css";

// static imports - each file should export a named array of image paths (see previous instructions)
import row1Images from "../assets/brands/row1";
import row2Images from "../assets/brands/row2";
import row3Images from "../assets/brands/row3";
import row4Images from "../assets/brands/row4";

const ROWS = [row1Images, row2Images, row3Images, row4Images];

export default function Brands({
  baseSpeed = 50, // seconds, lower = faster
}) {
  // duplicates a row array so marquee can slide seamlessly
  const duplicate = (arr) => [...arr, ...arr];

  return (
    <section id="brands" className="brands-page" aria-label="Brands and partners">
      <h2 className="section-title">BRANDS</h2>
      <p className="section-sub">
        We provide a full range of premium tech solutions for businesses. All products come from trusted top-tier brands for reliable performance.
      </p>

      <div className="brand-roll">
        {ROWS.map((row, rowIndex) => {
  if (!row || row.length === 0) return null;

  const speed = baseSpeed; // same for all rows
  const direction = rowIndex % 2 === 0 ? "normal" : "reverse";

  const logos = duplicate(row);

  return (
    <div className="brand-row" key={`row-${rowIndex}`} aria-hidden="false">
      <div
        className="brand-track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction,
          animationPlayState: "running",
        }}
      >
        {logos.map((src, i) => (
          <div className="brand-item" key={`r${rowIndex}-i${i}`}>
            <img
              src={src}
              alt={`Brand ${rowIndex + 1}-${(i % row.length) + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
})}

      </div>
    </section>
  );
}

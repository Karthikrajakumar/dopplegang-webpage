// src/components/Products.jsx
import React from "react";
import prod1 from "../assets/prod1.png";
import prod2 from "../assets/prod2.png";
import prod3 from "../assets/prod3.png";
import prod4 from "../assets/prod4.png";
import prod5 from "../assets/prod5.png";
import prod6 from "../assets/prod6.png";

/* named export for reuse if needed */
export const SAMPLE_PRODUCTS = [
  { id: 1, title: "Surveillance", img: prod3, bullets: ["CCTV", "Biometric and Door access Control", "Multi Apartment Video Door system", "Fire Alarm System", "Public Announcement System &  Accessories"] },
  { id: 2, title: "Telecommunication", img: prod4, bullets: ["EPABX", "IPABX", "Telephones", "Key phones & Accessories"] },
  { id: 3, title: "Projectors & Speakers", img: prod5, bullets: ["Lamp", "Laser", "Short Throw Projectors", "Projector Screen", "Home Theatre Speakers & Amplifiers", "Conference Table Speaker"] },
  { id: 4, title: "Printers & Scanners", img: prod2, bullets: ["Ecotank", "Inkjet", "Catridge Printers", "Barcode Printers/Barcode Labels", "Thermal Printers & Bill Rolls", "Scanners - 1D & 2D Barcode Scanner" ] },
  { id: 5, title: "Point Of Sale", img: prod1, bullets: ["Android POS", "Handheld & Desktop POS"] },
  { id: 6, title: "Network Product", img: prod6, bullets: ["Sever Rack", "Hard-Disk", "Desktop Switcher", "Smart Switcher", "Router & Accessories"] },
];

export default function Products() {
  return (
    <section id="products" className="products-wrapper" aria-label="Products and services">
      <h2 className="section-title">PRODUCTS</h2>
      <p className="section-sub">
        Advanced Solutions for Surveillance, Telecommunication, Audio-Visual Systems, Printing & Scanning, POS
        Technology, and Network Infrastructure
      </p>

      <div className="products-grid">
        {SAMPLE_PRODUCTS.map((p) => (
          <article key={p.id} className="prod-card" aria-labelledby={`prod-title-${p.id}`}>
            <div className="prod-thumb" role="img" aria-label={p.title + " image"}>
              <img src={p.img} alt={p.title} loading="lazy" />
            </div>

            <div className="prod-body">
              <h3 id={`prod-title-${p.id}`}>{p.title}</h3>
              <ul>
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

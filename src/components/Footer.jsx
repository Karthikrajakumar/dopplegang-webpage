import React from "react";
import phone from "../assets/icons/phone.png";
import landline from "../assets/icons/landline.png";
import mail from "../assets/icons/mail.png";
import location from "../assets/icons/location.png";

import instagram from "../assets/social/instagram.png";
import linkedin from "../assets/social/linkedin.png";
import facebook from "../assets/social/facebook.png";
import twitter from "../assets/social/twitter.png";


export default function Footer() {
  return (
  <footer className="site-footer">
    <div className="footer-ellipse"></div>

  <div class="footer-inner">
    <div class="footer-brand">
      <div class="brand-name-footer">DOPPLEGANG</div>
      <div className="footer-social">
  <a className="social-link" href="https://instagram.com" aria-label="Instagram">
    <img src={instagram} alt="Instagram" />
  </a>

  <a className="social-link" href="https://facebook.com" aria-label="Facebook">
    <img src={facebook} alt="Facebook" />
  </a>

  <a className="social-link" href="https://twitter.com" aria-label="Twitter">
    <img src={twitter} alt="Twitter" />
  </a>

  <a className="social-link" href="https://linkedin.com" aria-label="LinkedIn">
    <img src={linkedin} alt="LinkedIn" />
  </a>
</div>
</div>

    <div class="footer-nav" aria-label="Footer navigation">
      <div class="nav-title">OUR PAGE</div>
      <ul>
        <li><a href="#about">ABOUT US</a></li>
        <li><a href="#products">PRODUCTS</a></li>
        <li><a href="#brands">BRANDS</a></li>
        <li><a href="#contact">CONTACT US</a></li>
      </ul>
    </div>

    
    <div class="footer-contact" aria-label="Contact details">
  <div class="contact-title">OUR DETAILS</div>

  <div class="contact-item">
    <div class="ci-icon">
      <img src={phone} alt="Phone" />
    </div>
    <div>+91 73581 91276, +91 81242 12880</div>
  </div>

  <div class="contact-item">
    <div class="ci-icon">
      <img src={landline} alt="Landline" />
    </div>
    <div>044–29993048</div>
  </div>

  <div class="contact-item">
    <div class="ci-icon">
      <img src={mail } alt="Email" />
    </div>
    <div>info@doppelgang.com</div>
  </div>

  <div class="contact-item address">
    <div class="ci-icon">
      <img src={location} alt="Location" />
    </div>
    <div style={{textTransform: "uppercase"}}>NO: 6, Vani Vinayagar Kovil Street, Thirumullaivoyal, Chennai – 600062</div>
  </div>
</div>

  </div>

  <div class="footer-bottom"> <br/> <br/> <br/> © 2025 DOPPLEGANG — All rights reserved</div>
</footer>

  );
}

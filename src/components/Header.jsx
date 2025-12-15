import React from "react";

export default function Header() {
  return (
   <header className="site-header" role="banner">
  <div className="header-inner">
    <div className="brand">
      <div className="logo-mark" aria-hidden="true" />
      <span className="brand-name">DOPPELGANGER</span>
    </div>

    <nav className="nav" role="navigation" aria-label="Main">
      <a href="#about">ABOUT US</a>
      <a href="#products">PRODUCTS</a>
      <a href="#brands">BRANDS</a>
      <a href="#contact">CONTACT US</a>
      
    </nav>
  </div>
</header>

  );
}

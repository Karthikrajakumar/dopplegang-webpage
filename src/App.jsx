import Header from "./components/Header";
import Hero from "./components/Hero";

import AboutUs from "./components/AboutUs";

import Features from "./components/Features";
import Products from "./components/Products";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles.css";
//import MissionVision from "./components/MissionVision";


export default function App() {
  return (
    <div className="app-root">
      <Header />
      <Hero />
      
      <AboutUs />
      <Features />
      <Products />
      <Brands columns={4} pillsPerColumn={10} />
      <Contact />
      <Footer />
    </div>
  );
}

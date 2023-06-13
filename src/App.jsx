import React from "react";
import Companies from "./components/Companies";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import OurServices from "./components/OurServices";
import ThreeSection from "./components/ThreeSection";
import Feedback from "./components/Feedback";
import FooterSection from "./components/FooterSection";
import Footer from "./components/Footer";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <Navbar />
    <Hero />
    <Companies />
    <Services />
    <Benefits />
    <OurServices />
    <ThreeSection />
    <Feedback />
    <FooterSection />
    <Footer />
  </div>
);

export default App;

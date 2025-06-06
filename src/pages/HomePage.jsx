import React from "react";
import HeroSections from "../components/HeroSections";
import ClientLogos from "../components/ClientLogos";
import OurFeatures from "../components/OurFeatures";
import Templates from "../components/Templates";
import Portofolio from "../components/Portofolio";
import Testimoni from "../components/Testimoni";
import Footer from "./../components/Footer";
import Contact from "../components/Contact";

export default function Homepage() {
  return (
    <div>
      <HeroSections />
      <ClientLogos />
      <OurFeatures />
      <Templates />
      <Portofolio />
      <Testimoni />
      <Contact />
      <Footer />
    </div>
  );
}

import React from "react";
import Business from "./components/Business";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import InfluencerSlider from "./components/InfluencerSlider";
import './generalHomepage.css';

const GeneralHomepage = () => {
  return (
    <div className="bg-primary text-white w-full h-full">
      {/* Navbar Component */}
      <Navbar />
      
      {/* Scroll-to-top functionality */}
      <ScrollTop />
      
      {/* Main Content Container */}
      <div className="container px-5 md:px-10 mx-auto">
        {/* Hero Section */}
        <Hero />
        
        {/* Stats Section */}
        <div className="flex flex-col xs:flex-row flex-wrap items-center justify-between gap-6 md:gap-2 py-20">
          <Stats number="2300" title="Successful deals" />
        </div>
        
        {/* Business Section */}
        <Business />
        
        {/* Influencer Slider Section */}
        <InfluencerSlider />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

export default GeneralHomepage;
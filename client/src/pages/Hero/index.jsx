import React from "react";
import Navbar from "../../components/hero/Navbar";
import HeroSection from "../../components/hero/HeroSection";
import Features from "../../components/hero/Features";
import Video from "../../components/hero/Video";
import IAinbox from "../../components/hero/IAinbox";
import NewsLettter from "../../components/hero/NewsLettter";
import Partners from "../../components/hero/Partners";
import Pricing from "../../components/hero/Pricing";
import ContactUs from "../../components/hero/ContactUs";
import Footer from "../../components/hero/Footer";
import Testimonials from "../../components/hero/Testimonials";




const Hero = () => {
  return (

    <main className="bg-gradient-to-r from-red-100 to-cyan-200 ">
       <Navbar/>
       <HeroSection />
       <Features />
       <Video />
       <IAinbox />
       <NewsLettter/>
        <Partners/>
       <Testimonials />
       <Pricing />
       <ContactUs/>
       <Footer/> 
    </main>
  );
};

export default Hero;

import React from "react";

import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
// import Testimonial from "./components/tesimonial/Testimonial";
import Stars from "./components/utils/stars.jsx";

function App() {
  return (
    <div className="bg-gradient-to-r from-[rgba(2,1,23,1)] via-[rgba(12,12,42,1)] text-lightText to-[rgba(4,9,40,1)]">
      {/* <BackgroundBeams /> */}
      <div className="relative z-0">
        <Stars />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <Banner />
        <Features />
        <Projects />
        <Resume />
        {/* <Testimonial /> */}
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Programs from "./components/programs/Programs";

import Title from "./components/title/Title";
import About from "./components/about/About";
import Campus from "./components/campus/Campus";
import Testmonials from "./components/testmonials/Testmonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import VideoPlayer from "./components/videoplayer/VideoPlayer";

import { BrowserRouter as Router } from "react-router-dom";

import {useState } from "react";
import Admission from "./components/admission/Admission";
import Student from "./components/Student/Student";

const App = () => {
  const [playing, setPlaying] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <Router>
      <div>
        <Navbar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
        <Hero />
        
        <div className="container">
          <About/>
          <Programs />
          <Admission />
          <Student/>
          <Title title="School Photos" subtitle="Our Gallery" id="campus" />
          <Campus />
          <Title
            title="Our Team"
            subtitle="Faculty"
            id="testmonials"
          />
          <Testmonials />
          <Title title="Get In Touch" subtitle="Contact Us" id="contact" />
          <Contact />
        </div>
        <Footer />
        <VideoPlayer playing={playing} setPlaying={setPlaying} />
      </div>
    </Router>
  );
};

export default App;

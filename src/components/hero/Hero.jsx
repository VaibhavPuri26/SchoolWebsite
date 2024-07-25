import "./hero.css";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import sports_day from "../../assets/sports_day.jpg"
import science_exhibition from "../../assets/science_exhibition_home.jpg"
import cultural_fest from "../../assets/cultural fest home.jpg"
const Hero = () => {
  useEffect(() => {
    let index = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const showSlide = () => {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
      });
      index = (index + 1) % slides.length;
    };
    const interval = setInterval(showSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero container" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Springdale Public School</h1>
          <p>
            Welcome to Springdale Public School, where we nurture young minds for a brighter future.
          </p>
          <div className="hero-buttons">
            <Link
              to="testmonials"
              smooth={true}
              duration={500}
              className="btn btn-hero"
            >
              Faculty
              <FaArrowRight size={20} className="arrow-right" />
            </Link>
            <Link
              to="student"
              smooth={true}
              duration={500}
              className="btn btn-hero"
            >
              Students
              <FaArrowRight size={20} className="arrow-right" />
            </Link>
          </div>
        </div>
        <div className="hero-carousel">
          <div className="carousel-slide"><img src={sports_day} alt="Slide 1" /></div>
          <div className="carousel-slide"><img src={science_exhibition} alt="Slide 2" /></div>
          <div className="carousel-slide"><img src={cultural_fest} alt="Slide 3" /></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

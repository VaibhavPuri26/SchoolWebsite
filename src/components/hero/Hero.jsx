import "./hero.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero container" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
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
    </div>
  );
};

export default Hero;

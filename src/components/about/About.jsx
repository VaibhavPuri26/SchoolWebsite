import "./about.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlaying }) => {
  const playVideo = () => {
    setPlaying(true);
  };

  return (
    <div className="about" id="about">
      <div className="about-right">
        <h3>About Us</h3>
        <section className="about-section">
          <h4>History</h4>
          <p>Founded in 1985, Springdale Public School has been committed to excellence in education and fostering holistic development among its students. Over the years, we have consistently adapted to the changing educational landscape, ensuring that our students receive a contemporary and relevant education.</p>
        </section>
        <section className="about-section">
          <h4>Vision</h4>
          <p>Our vision is to cultivate an enriching learning environment that promotes academic excellence, critical thinking, and ethical values. We aim to inspire a passion for lifelong learning and prepare our students to be responsible global citizens.</p>
        </section>
        <section className="about-section">
          <h4>Mission</h4>
          <p>We are dedicated to empowering our students with the knowledge, skills, and values necessary to thrive in an ever-evolving world. Our mission is to provide a nurturing and inclusive environment that supports the individual growth and development of each student.</p>
        </section>
        <section className="about-section">
          <h4>Principal's Message</h4>
          <p>At Springdale, we believe in the potential of every student. Our dedicated staff and innovative programs are geared towards guiding students towards success and helping them achieve their full potential. Together, we strive to create a community that values excellence, integrity, and respect.</p>
        </section>
        <section className="about-section">
          <h4>Infrastructure and Facilities</h4>
          <ul>
            <li>State-of-the-art science and computer labs equipped with the latest technology to support innovative learning.</li>
            <li>Spacious and well-equipped classrooms designed to facilitate interactive and engaging instruction.</li>
            <li>A comprehensive library with a vast collection of books, digital resources, and study areas to support research and reading.</li>
            <li>Extensive sports facilities, including a playground, gymnasium, and swimming pool, to promote physical well-being and teamwork.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;

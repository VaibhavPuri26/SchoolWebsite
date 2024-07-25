import SportsDay1 from "../../assets/sports_day.jpg"
import scienceexhibition from "../../assets/science_exhibition.jpg"
import culturalfest from "../../assets/cultural_fest.jpeg"
import interactiveclassroom from "../../assets/classroom.jpg"
import library from "../../assets/library.jpg"
import school_tour from "../../assets/school_tour.mp4"
import annual_function from "../../assets/annual_function.mp4"

import './campus.css';

const Campus = () => {
  return (
    <div className="campus-container">
      <h2>Photos</h2>
      <div className="photos-column">
        <div className="photo-item">
          <img src={SportsDay1} alt="Students participating in various sports events." />
          <p>Students participating in various sports events.</p>
        </div>
        <div className="photo-item">
          <img src={scienceexhibition} alt="Students presenting their science projects." />
          <p>Students presenting their science projects.</p>
        </div>
        <div className="photo-item">
          <img src={culturalfest} alt="Students performing in the cultural fest." />
          <p>Students performing in the cultural fest.</p>
        </div>
        <div className="photo-item">
          <img src={interactiveclassroom} alt="A glimpse of our interactive classrooms." />
          <p>A glimpse of our interactive classrooms.</p>
        </div>
        <div className="photo-item">
          <img src={library} alt="Students reading and studying in the school library." />
          <p>Students reading and studying in the school library.</p>
        </div>
      </div>
      <div className="videos-section">
        <h2>Videos</h2>
        <div className="video-item">
          <video controls>
            <source src={school_tour} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Virtual tour of Springdale Public School.</p>
        </div>
        <div className="video-item">
          <video controls>
            <source src={annual_function} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Highlights from the Annual Function 2023.</p>
        </div>
      </div>
    </div>
  );
}

export default Campus;

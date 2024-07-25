import "./testmonials.css";
import { GrNext, GrPrevious } from "react-icons/gr";

import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testmonials = () => {
  const slider = useRef();
  

  let tx = 0;

  const slideRight = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideLeft = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testmonials">
      <GrNext className="next-btn" onClick={slideRight} />
      <GrPrevious className="prev-btn" onClick={slideLeft} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>John Doe</h3>
                  <span>Principal, M.Ed</span>
                </div>
              </div>
              <p>
              20 years of experience in educational administration.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Jane Smith</h3>
                  <span>Vice Principak, M.Sc in Physics</span>
                </div>
              </div>
              <p>
              15 years of teaching experience.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Emily Johnson</h3>
                  <span>English Teacher, M.A. in English</span>
                </div>
              </div>
              <p>
              10 years of teaching experience.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Michael Brown</h3>
                  <span>Mathematics Teacher,M.Sc. in Mathematics</span>
                </div>
              </div>
              <p>
              8 years of teaching experience.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Michael Brown</h3>
                  <span>Science Teacher,M.Sc. in Chemistry</span>
                </div>
              </div>
              <p>
              12 years of teaching experience.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>David Wilson</h3>
                  <span>B.Tech in Computer Science</span>
                </div>
              </div>
              <p>
              5 years of teaching experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testmonials;

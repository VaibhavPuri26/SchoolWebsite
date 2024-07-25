import { useState } from 'react';
import Modal from 'react-modal';
import "./programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
import Title from "../title/Title";

Modal.setAppElement('#root'); // For accessibility

const Programs = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const curriculumInfo = {
    undergraduate: {
      title: "Primary (Grades 1-5)",
      content: (
        <>
          <h3>Subjects: </h3>
          <p>English, Mathematics, Science, Social Studies, Art, Physical Education</p>
          <h3>Teaching Methodologies</h3>
          <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
          <h3>Educational Resources</h3>
          <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
        </>
      ),
    },
    masters: {
      title: "Secondary (Grades 6-10)",
      content: (
        <>
          <h3>Subjects:</h3>
          <p>English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
          <h3>Teaching Methodologies</h3>
          <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
          <h3>Educational Resources</h3>
          <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
        </>
      ),
    },
    postGraduate: {
      title: "Senior Secondary (Grades 11-12)",
      content: (
        <>
          <h3>Streams</h3>
          <p>
            <strong>Science :</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English
          </p>
          <p>
            <strong>Commerce :</strong> Accountancy, Business Studies, Economics, Mathematics, English
          </p>
          <h3>Teaching Methodologies</h3>
          <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
          <h3>Educational Resources</h3>
          <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
        </>
      ),
    }
  };

  return (
    <>
      <Title title="Academics" subtitle="Our Curriculum and Methodologies" id="programs" />
      <div className="programs">
        <div className="programs-list">
          <div className="program" onClick={() => openModal(curriculumInfo.undergraduate)}>
            <img src={program_1} alt="Primary (Grades 1-5)" />
            <div className="caption">
              <img src={program_icon_1} alt="" />
              <p>Primary</p>
            </div>
            <p className="grades">Grades 1-5</p>
          </div>
          <div className="program" onClick={() => openModal(curriculumInfo.masters)}>
            <img src={program_2} alt="Secondary (Grades 6-10)" />
            <div className="caption">
              <img src={program_icon_2} alt="" />
              <p>Secondary</p>
            </div>
            <p className="grades">Grades 6-10</p>
          </div>
          <div className="program" onClick={() => openModal(curriculumInfo.postGraduate)}>
            <img src={program_3} alt="Senior Secondary (Grades 11-12)" />
            <div className="caption">
              <img src={program_icon_3} alt="" />
              <p>Senior Secondary</p>
            </div>
            <p className="grades">Grades 11-12</p>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Curriculum Modal"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <h2>{modalContent.title}</h2>
          <div className="modal-content">
            {modalContent.content}
          </div>
          <button onClick={closeModal} className="modal-close">Close</button>
        </Modal>
      </div>
    </>
  );
};

export default Programs;

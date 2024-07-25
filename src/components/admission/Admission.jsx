import { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './admission.css';

const Admission = () => {
  const [isFormOpen, setFormOpen] = useState(false);

  const handleFormToggle = () => {
    setFormOpen(!isFormOpen);
  };

  const handleDownloadPDF = () => {
    const formElement = document.querySelector('.form-container');

    html2canvas(formElement, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, -heightLeft, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('admission-form.pdf');
    }).catch((error) => {
      console.error("Error generating PDF: ", error);
    });
  };

  return (
    <div className="admission" id="admission">
      <h3>Admissions</h3>
      <section className="admission-section">
        <h4>Admission Process and Criteria</h4>
        <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
        <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
      </section>
      <section className="admission-section">
        <h4>Downloadable Admission Forms</h4>
        <p>You can download the admission forms from the link below:</p>
        <button className="download-button" onClick={handleFormToggle}>Admission Form</button>
      </section>
      <section className="admission-section">
        <h4>Important Dates and Deadlines for Admission</h4>
        <ul>
          <li><strong>Admission Form Availability:</strong> March 1st</li>
          <li><strong>Last Date for Submission:</strong> March 31st</li>
          <li><strong>Entrance Test:</strong> April 15th</li>
          <li><strong>Announcement of Results:</strong> April 30th</li>
        </ul>
      </section>
      
      {isFormOpen && (
        <div className="form-overlay">
          <div className="form-container">
            <button className="close-button" onClick={handleFormToggle}>×</button>
            <button className="download-pdf-button" onClick={handleDownloadPDF}>Download as PDF</button>
            <h4>Admission Form</h4>
            <form className="admission-form">
              <div className="form-section">
                <h5>Personal Information</h5>
                <label htmlFor="studentName">Students Full Name:</label>
                <input type="text" id="studentName" name="studentName" required />

                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" required />

                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" required>
                  <option value="" disabled>Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>

                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />

                <label htmlFor="contact">Contact Number:</label>
                <input type="tel" id="contact" name="contact" required />
              </div>

              <div className="form-section">
                <h5>Parent/Guardian Information</h5>
                <label htmlFor="parentName">Parent/Guardian Name(s):</label>
                <input type="text" id="parentName" name="parentName" required />

                <label htmlFor="relationship">Relationship to Student:</label>
                <input type="text" id="relationship" name="relationship" required />

                <label htmlFor="occupation">Occupation:</label>
                <input type="text" id="occupation" name="occupation" required />

                <label htmlFor="parentContact">Contact Information:</label>
                <input type="text" id="parentContact" name="parentContact" placeholder="Phone number, Email" required />

                <label htmlFor="parentAddress">Address (if different from the students address):</label>
                <input type="text" id="parentAddress" name="parentAddress" />
              </div>

              <div className="form-section">
                <h5>Medical Information</h5>
                <label htmlFor="medicalConditions">Health Conditions or Allergies:</label>
                <textarea id="medicalConditions" name="medicalConditions" rows="4"></textarea>
              </div>

              <div className="form-section">
                <h5>Academic Information</h5>
                <label htmlFor="previousSchool">Name of Previous School:</label>
                <input type="text" id="previousSchool" name="previousSchool" required />

                <label htmlFor="grade">Grade/Class Attended:</label>
                <input type="text" id="grade" name="grade" required />

                <label htmlFor="specialNeeds">Special Educational Needs (if any):</label>
                <textarea id="specialNeeds" name="specialNeeds" rows="4"></textarea>
              </div>

              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admission;

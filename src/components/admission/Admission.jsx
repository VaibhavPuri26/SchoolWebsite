import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './admission.css';

const Admission = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState(null); // State to store form data
  const navigate = useNavigate();

  const handleFormToggle = () => {
    setFormOpen(!isFormOpen);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    // Capture form data
    const data = {
      studentName: document.getElementById('studentName').value,
      dob: document.getElementById('dob').value,
      gender: document.getElementById('gender').value,
      address: document.getElementById('address').value,
      contact: document.getElementById('contact').value,
      parentName: document.getElementById('parentName').value,
      relationship: document.getElementById('relationship').value,
      occupation: document.getElementById('occupation').value,
      parentContact: document.getElementById('parentContact').value,
      parentAddress: document.getElementById('parentAddress').value,
      medicalConditions: document.getElementById('medicalConditions').value,
      previousSchool: document.getElementById('previousSchool').value,
      grade: document.getElementById('grade').value,
      specialNeeds: document.getElementById('specialNeeds').value,
    };

    // Set form data to state
    setFormData(data);

    // Redirect to Hero component
    navigate('/hero');

    // Close the form
    setFormOpen(false);
  };

  const downloadPDF = () => {
    if (!formData) {
      alert('No form data available to download.');
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Admission Form", 10, 10);

    const formContent = [
      ["Section", "Field", "Value"],
      ["Personal Information", "Students Full Name", formData.studentName || ''],
      ["Personal Information", "Date of Birth", formData.dob || ''],
      ["Personal Information", "Gender", formData.gender || ''],
      ["Personal Information", "Address", formData.address || ''],
      ["Personal Information", "Contact Number", formData.contact || ''],
      ["Parent/Guardian Information", "Parent/Guardian Name(s)", formData.parentName || ''],
      ["Parent/Guardian Information", "Relationship to Student", formData.relationship || ''],
      ["Parent/Guardian Information", "Occupation", formData.occupation || ''],
      ["Parent/Guardian Information", "Contact Information", formData.parentContact || ''],
      ["Parent/Guardian Information", "Address", formData.parentAddress || ''],
      ["Medical Information", "Health Conditions or Allergies", formData.medicalConditions || ''],
      ["Academic Information", "Name of Previous School", formData.previousSchool || ''],
      ["Academic Information", "Grade/Class Attended", formData.grade || ''],
      ["Academic Information", "Special Educational Needs", formData.specialNeeds || ''],
    ];

    doc.autoTable({
      head: [['Section', 'Field', 'Value']],
      body: formContent,
    });

    doc.save('admission_form.pdf');
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
        <button className="download-button" onClick={downloadPDF}>Download Submitted Form</button>
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
            <h4>Admission Form</h4>
            <form className="admission-form" onSubmit={handleFormSubmit}>
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

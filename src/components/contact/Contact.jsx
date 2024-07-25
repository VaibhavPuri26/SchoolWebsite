import { useState } from "react";
import "./contact.css";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    const response = await fetch("https://formspree.io/f/xwpevykj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setResult("Form Submitted Successfully");
      setFormData({
        fname: "",
        email: "",
        message: "",
      });
    } else {
      console.log("Error", data);
      setResult(data.error || "An error occurred");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send us a message <FaEnvelope size={20} className="message-icon" />
          </h3>
        
          <ul>
            <li>
              <FaEnvelope className="contact-icon" /> info@springdale.edu
            </li>
            <li>
              <FaPhone className="contact-icon" /> +1 (123) 456-7890
            </li>
            <li>
              <FaLocationDot className="contact-icon" /> 
              Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="fname">Your Name:</label>
              <input
                type="text"
                name="fname"
                placeholder="Enter Your Name"
                required
                value={formData.fname}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                rows="6"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-control button">
              <button className="btn dark-btn">Submit</button>
            </div>
          </form>
          <span>{result}</span>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.2274695512824!2d75.40783080000001!3d30.001624199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39111f49b03869ed%3A0x6af4feff93ea639a!2sEducation%20Lane%2C%20Mansa!5e0!3m2!1sen!2sin!4v1721851346015!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0", marginBottom: "80px" }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

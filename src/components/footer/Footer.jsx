import "./footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="container footer">
      <a href="#home">
        <img src={logo} alt="" className="footer-logo" />
      </a>
      <p>&copy; {new Date().getFullYear()}. All Rights Reserved</p>
      <ul>
        Terms and conditions
      </ul>
    </div>
  );
};

export default Footer;

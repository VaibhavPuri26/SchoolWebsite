import "./navbar.css";
import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-scroll";

const Navbar = ({ mobileMenu, setMobileMenu }) => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`nav-bar container ${sticky && "dark-nav"}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="about">About Us</Link>
        </li>
        <li>
          <Link to="programs">Academics</Link>
        </li>
        <li>
          <Link to="admission">Admissions</Link>
        </li>
        <li>
          <Link to="campus">Gallery</Link>
        </li>
        <li>
          <Link to="contact" className="btn">
            Contact Us
          </Link>
        </li>
      </ul>
      {mobileMenu ? (
        <LiaTimesSolid
          className="menu-icon"
          size={30}
          onClick={toggleMobileMenu}
        />
      ) : (
        <GiHamburgerMenu
          className="menu-icon"
          size={30}
          onClick={toggleMobileMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;

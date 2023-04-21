import React from "react";
import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Hybrid
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://web.facebook.com/adewale.ologbenla.9">
          <FaFacebookSquare />
        </a>
        <a href="https://www.instagram.com/hybrid_web/">
          <FaInstagramSquare />
        </a>
        <a href="https://twitter.com/WalexyTush">
          <FaTwitterSquare />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Hybrid Codes. All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

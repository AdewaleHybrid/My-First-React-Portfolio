import React from "react";
import "./header.css";
import CTA from "../CTA";
import HeaderSocials from "../HeaderSocials";
import myself from "../../assets/toon.png";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Adewale Ologbenla</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="myself">
          <img src={myself} alt="my picture" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

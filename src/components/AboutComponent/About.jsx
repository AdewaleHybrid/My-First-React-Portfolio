import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";
import myself from "../../assets/toon.png";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* Image Container */}
        <div className="about__me">
          <div className="about__me-image">
            <img src={myself} alt="" />
          </div>
        </div>

        {/* Content Container */}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ years working experience</small>
            </article>
            <article className="about__card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>70+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderActive className="about_icon" />
              <h5>Project</h5>
              <small>60+ Completed Project</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quae optio atque perspiciatis incidunt molestias nisi eaque aspernatur,
            hic accusamus culpa, animi ad laudantium assumenda aut, error unde explicabo obcaecati?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

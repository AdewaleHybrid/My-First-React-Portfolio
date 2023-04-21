import React from "react";
import "./portfolio.css";
import kbronx from "../../assets/kbronx.png";

const Portfolio = () => {
  const data = [
    {
      id: "1",
      image: kbronx,
      title: "This is a portfolio Item title",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: "2",
      image: kbronx,
      title: "This is a portfolio Item title",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: "3",
      image: kbronx,
      title: "This is a portfolio Item title",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: "4",
      image: kbronx,
      title: "This is a portfolio Item title",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: "5",
      image: kbronx,
      title: "This is a portfolio Item title",
      github: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: "6",
      image: kbronx,
      title: "This is a portfolio Item title",
      github: "https://github.com",
      demo: "https://github.com",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, title, image, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

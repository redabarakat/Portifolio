import React, { useState } from "react";
import "./Portfolio.css";
import html from "../../assests/html.png";
import css from "../../assests/css3.png";
import js from "../../assests/javascript-logo.png";

import servicesWeb from "../../assests/services-website.jpeg";
import fitnessweb from "../../assests/fitness-website.jpeg";
import furniture from "../../assests/furniture-website.jpeg";
import facebook from "../../assests/facebookwebsite.jpeg";
import creative from "../../assests/creative-agency.jpeg";
import elzero from "../../assests/elzero-template.jpeg";
import notebook from "../../assests/notebook.jpeg";
import quizApp from "../../assests/quiz-app.jpeg";
import filter from "../../assests/filter-image.jpeg";
import hangman from "../../assests/hangman.jpeg";
import memmory from "../../assests/memmory-game.jpeg";

const Portfolio = () => {
  const [show, setShow] = useState(false);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2 className="animation-title">Portfolio</h2>

      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-image">
            <img src={servicesWeb} alt="pho" />
          </div>
          <h3>Services Website</h3>
          <div className="portfolio-tools">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
          </div>
          <div className="portfolio-btns">
            {" "}
            <a
              href="https://github.com/redabarakat/Services-website"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              href="https://redabarakat.github.io/Services-website/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-image">
            <img src={fitnessweb} alt="pho" />
          </div>
          <h3>fitness website</h3>
          <div className="portfolio-tools">
            <img src={html} alt="" />
            <img src={css} alt="" />
          </div>
          <div className="portfolio-btns">
            {" "}
            <a
              href="https://github.com/redabarakat/Fitness-website"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              href="https://redabarakat.github.io/Fitness-website/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-image">
            <img src={furniture} alt="pho" />
          </div>
          <h3>furniture website</h3>
          <div className="portfolio-tools">
            <img src={html} alt="" />
            <img src={css} alt="" />
          </div>
          <div className="portfolio-btns">
            {" "}
            <a
              href="https://github.com/redabarakat/Furniture-Store-template"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              href="https://redabarakat.github.io/Furniture-Store-template/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-image">
            <img src={facebook} alt="pho" />
          </div>
          <h3>facebook Template</h3>
          <div className="portfolio-tools">
            <img src={html} alt="" />
            <img src={css} alt="" />
          </div>
          <div className="portfolio-btns">
            {" "}
            <a
              href="https://github.com/redabarakat/facebookTemplate"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              href="https://redabarakat.github.io/facebookTemplate/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-image">
            <img src={creative} alt="pho" />
          </div>
          <h3>CREATIVE AGENCY</h3>
          <div className="portfolio-tools">
            <img src={html} alt="" />
            <img src={css} alt="" />
          </div>
          <div className="portfolio-btns">
            {" "}
            <a
              href="https://github.com/redabarakat/creative-temple-1"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              href="https://redabarakat.github.io/creative-temple-1/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-image">
            <img src={elzero} alt="pho" />
          </div>
          <h3>elzero template</h3>
          <div className="portfolio-tools">
            <img src={html} alt="" />
            <img src={css} alt="" />
          </div>
          <div className="portfolio-btns">
            {" "}
            <a
              href="https://github.com/redabarakat/template-three"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              href="https://redabarakat.github.io/template-three/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
        {show && (
          <>
            <article className="portfolio-item">
              <div className="portfolio-image">
                <img src={notebook} alt="pho" />
              </div>
              <h3>Note book</h3>
              <div className="portfolio-tools">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
              </div>
              <div className="portfolio-btns">
                {" "}
                <a
                  href="https://github.com/redabarakat/note-book"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
                <a
                  href="https://redabarakat.github.io/note-book/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
            </article>
            <article className="portfolio-item">
              <div className="portfolio-image">
                <img src={quizApp} alt="pho" />
              </div>
              <h3>Quiz App</h3>
              <div className="portfolio-tools">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
              </div>
              <div className="portfolio-btns">
                {" "}
                <a
                  href="https://github.com/redabarakat/quizApp-project"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
                <a
                  href="https://redabarakat.github.io/quizApp-project/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
            </article>
            <article className="portfolio-item">
              <div className="portfolio-image">
                <img src={filter} alt="pho" />
              </div>
              <h3>Filter Images</h3>
              <div className="portfolio-tools">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
              </div>
              <div className="portfolio-btns">
                {" "}
                <a
                  href="https://github.com/redabarakat/filter-image"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
                <a
                  href="https://redabarakat.github.io/filter-image/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
            </article>
            <article className="portfolio-item">
              <div className="portfolio-image">
                <img src={hangman} alt="pho" />
              </div>
              <h3>Hangman Game</h3>
              <div className="portfolio-tools">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
              </div>
              <div className="portfolio-btns">
                {" "}
                <a
                  href="https://github.com/redabarakat/Hangman-Game"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
                <a
                  href="https://redabarakat.github.io/Hangman-Game/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
            </article>
            <article className="portfolio-item">
              <div className="portfolio-image">
                <img src={memmory} alt="pho" />
              </div>
              <h3>memory Game</h3>
              <div className="portfolio-tools">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
              </div>
              <div className="portfolio-btns">
                {" "}
                <a
                  href="https://github.com/redabarakat/memory-Game"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
                <a
                  href="https://redabarakat.github.io/memory-Game/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
            </article>
          </>
        )}
      </div>
      <div className="container" style={{ marginTop: "1rem" }}>
        <button onClick={() => setShow(!show)} className="btn btn-primary">
          {show ? "Show Less" : "More"}
        </button>
      </div>
    </section>
  );
};

export default Portfolio;

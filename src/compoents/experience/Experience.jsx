import React from "react";
import "./Experience.css";
import { BsPatchCheckFill, BsPatchPlusFill } from "react-icons/bs";
import html from "../../assests/html.png";
import css from "../../assests/css3.png";
import js from "../../assests/javascript-logo.png";
import reactjs from "../../assests/react-js-logo.png";
import tailwind from "../../assests/tailwind-css.png";
import bootstarp from "../../assests/bootstrap-framework-logo.png";
import nodejs from "../../assests/nodejs (1).png";
import mongodb from "../../assests/mongodb.png";
import express from "../../assests/express.png";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2 className="animation-title">My Experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Tools</h3>
          <div className="experience-content">
            <div className="experience-details">
              <BsPatchCheckFill className="icon" />
              <div>
                <img src={html} alt="html" />
                <small className="text-light">Html (Experienced)</small>
              </div>
            </div>
            <div className="experience-details">
              <BsPatchCheckFill className="icon" />
              <div>
                <img src={css} alt="css" />
                <small className="text-light">CSS (Experienced)</small>
              </div>
            </div>
            <div className="experience-details">
              <BsPatchCheckFill className="icon" />
              <div>
                <img src={js} alt="js" />
                <small className="text-light">Javascript (Experienced)</small>
              </div>
            </div>
            <div className="experience-details">
              <BsPatchCheckFill className="icon" />
              <div>
                <img src={reactjs} alt="reactjs" />
                <small className="text-light">ReactJS (Experienced)</small>
              </div>
            </div>
            <div className="experience-details">
              <BsPatchCheckFill className="icon" />
              <div>
                <img src={bootstarp} alt="bootstarp" />
                <small className="text-light">Bootstrap (Experienced)</small>
              </div>
            </div>
            <div className="experience-details">
              <BsPatchCheckFill className="icon" />
              <div>
                <img src={tailwind} alt="tailwind" />
                <small className="text-light">Tailwind Css (Experienced)</small>
              </div>
            </div>
          </div>
        </div>
        <div className="experience-backend">
          <h3>Backend Tools</h3>
          <div className="experience-content">
            <div className="experience-details">
              <BsPatchPlusFill className="icon" />
              <div>
                <img src={nodejs} alt="nodejs" />
                <small className="text-light">NodeJs (still learning)</small>
              </div>
            </div>
            <div className="experience-details">
              <BsPatchPlusFill className="icon" />
              <div>
                <img src={mongodb} alt="mongodb" />
                <small className="text-light">MongoDB (still learning)</small>
              </div>
            </div>
            <div className="experience-details">
              <BsPatchPlusFill className="icon" />
              <div>
                <img
                  src={express}
                  alt="express"
                  style={{ background: "#c7c7ca", borderRadius: "10px" }}
                />
                <small className="text-light">ExpressJs (still learning)</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

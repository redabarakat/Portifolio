import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import me2 from "../../assests/about-reda-PhotoRoom.png-PhotoRoom.png";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2 className="animation-title">About ME</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={me2} alt="me" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <artical className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </artical>
            <artical className="about-card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </artical>
            <artical className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </artical>
          </div>

          <p>Allow me to take a little of your time to introduce myself.</p>
          <p>
            I am a graduate of the Faculty of Science, Department of Chemistry
            from 2018. I work as a medical laboratory specialist, but my hobby
            was programming websites and I obtained a set of certificates in the
            field of front-end development and continued until I became a MERN
            stack developer.”
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

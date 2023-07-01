import React from "react";
import Me from "../../assests/64808530b1306400075dc35e (2).jpg";
import logo from "../../assests/reda.png";
import CTA from "./CTA";
import "./Header.css";
import HeaderSocials from "./HeaderSocials";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h5>Hello i'm</h5>
        <h1>Reda Mohamed</h1>
        <h5 className="text-light">
          Front End Developer <br />
          (Still Learning To Be MERN Stack)
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="my_photo" />
        </div>

        <a href="#contact" className="scroll_down">
          <BsFillArrowDownCircleFill
            className="arrow"
            style={{ fontSize: "20px" }}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;

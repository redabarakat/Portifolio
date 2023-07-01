import React from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header_social">
      <a href="https://github.com/redabarakat" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/reda-barakat-381b53279/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.facebook.com/reda.barakat.5?mibextid=ZbWKwL"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;

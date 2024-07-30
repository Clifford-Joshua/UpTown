import React from "react";
import Logo from "../Images/Footer-img.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="home-text">
        <img src={Logo} alt="" />
        <h2>UP-TOWN</h2>
        <h3>{`©copyright ${new Date().getFullYear()}`}</h3>
      </div>
    </div>
  );
};

export default Footer;

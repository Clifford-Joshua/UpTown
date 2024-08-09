import React from "react";
import NTF from "./NTF";
import IT_Mangement from "./IT_Mangement";
import Logo from "../Images/Up-town-.png";
const Home = () => {
  return (
    <>
      <section className="Homepage pages">
        <div className="home-text">
          <img src={Logo} alt="" />
          <h2>UP-TOWN</h2>
          <p>Blow & Dry Bar</p>
        </div>
        <div className="home-welcome home-text">
          <h3>Look & Feel</h3>
          <h1 className="big-text">Beautiful</h1>
        </div>
      </section>
      <NTF />
      <IT_Mangement />
    </>
  );
};

export default Home;

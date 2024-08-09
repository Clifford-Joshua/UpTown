import React from "react";
import AboutImg from "../Images/Aboul-Bg.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="pages">
      {/* ==pageSetUp=== */}
      <div className="pagesetup two-div">
        <div className="about-bg ">
          <img src={AboutImg} alt="About-bg" className="full-height-width" />
        </div>
        <div className="coloum-set static-height">
          <div>
            <h2 className="new-font">About</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
              voluptate velit animi autem et quas dignissimos soluta facilis
              asperiores tempore? Facere eligendi, rerum quam cupiditate
              deserunt sint, culpa illo accusantium earum fuga amet ratione
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              enim cum in recusandae accusamus perspiciatis nemo assumenda
            </p>
            <Link className="links">Our Gallery</Link>
          </div>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default About;

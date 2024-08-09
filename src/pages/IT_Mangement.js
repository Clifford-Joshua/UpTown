import React from "react";
import AppleGlass from "../Images/appleglass.png";
const IT_Mangement = () => {
  return (
    <section className="pages IT">
      <div className="IT-Mangement full-height-width-ipad ">
        <h1>
          Why Up-TOWN Has The Top{" "}
          <span className="bluelighting">Rated Managed IT Services In LA</span>
        </h1>
        <div
          className="contact-holder
        hours coloum-set IT-IPD"
        >
          <div className="styled-img-container">
            <img src={AppleGlass} alt="" className="apple-image" />
            <div className="masked"></div>
          </div>
          <article>
            <div className="header">
              <h2 className="bluelighting title-font">PROTECT</h2>
              <p>
                Up-TOWN Response Quickly To Your IT Needs WIth 24*7*365 Help
                Desk Support
              </p>
            </div>
            <div className="header">
              <h2 className="new-font">DETECT</h2>
              <p>
                Up-TOWN Response Quickly To Your IT Needs WIth 24*7*365 Help
                Desk Support
              </p>
            </div>
            <div className="header">
              <h2 className="new-font">RESPOND</h2>
              <p>
                Up-TOWN Response Quickly To Your IT Needs WIth 24*7*365 Help
                Desk Support
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default IT_Mangement;

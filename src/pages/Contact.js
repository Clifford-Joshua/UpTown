import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <section className="pages">
      <div className="contact pagesetup ">
        <div className="contact-two-div contact-holder">
          <div className="flex-item spacing">
            <h3 className="new-font header">CONTACT US</h3>
            <form>
              <h3 className="color">SEND UP A MESSAGE</h3>
              <input type="text" name="" id="" placeholder="Name" />
              <br />
              <input type="text" name="" id="" placeholder="Email" />
              <br />
              <input type="text" name="" id="" placeholder="Phone" />
              <br />
              <textarea name="" id="" placeholder="Message"></textarea>
              <button className="submit-btn">Send</button>
            </form>
          </div>
          <div className="flex-item ">
            <h2 className="header new-font">UP TOWN LOCATION</h2>
            <div className="contact-two-div">
              <div>
                <h3 className="color">COLUMBUS, OHIO </h3>
                <p>614.475.4568</p>
                <p>Easton Town Center</p>
                <p> 217 Easton Town Center </p>
                <p>Columbus, Ohio 43219 </p>
                <h3 className="hours">Hours:</h3>
                <p>Monday - Thursday 10am-9pm</p>
                <p>Friday - Saturday 10am-10pm</p>
              </div>
              <div>
                <h3 className="color">PITTSBURGH , PA</h3>
                <p>412.366.1001 </p>
                <p>Ross Park Mall</p>
                <p>1000 Ross Park Mall Drive</p>
                <p>Pittsburgh, PA 15237 </p>
                <h3 className="hours">Hours:</h3>
                <p>Monday - Saturday 10am-9pm</p>
                <p>Sunday: 11am-6pm Sunday 12pm-6pm</p>
              </div>
            </div>
          </div>
        </div>
        <Link className="links">ONLINE BOOKING</Link>
      </div>
    </section>
  );
};

export default Contact;

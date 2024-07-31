import React from "react";
import { Link } from "react-router-dom";
const Highrise = () => {
  return (
    <section className=" pages">
      <div className="pagesetup coloum-set full-width highrise">
        <ul className="high-rise-link">
          <li>
            <Link className="high-link">Signature</Link>
          </li>
          <li>
            <Link className="high-link">METROPOLIAN</Link>
          </li>
          <li>
            <Link className="high-link">MUSE</Link>
          </li>
          <li>
            <Link className="high-link">ICON</Link>
          </li>
          <li>
            <Link className="high-link">STARGAZER</Link>
          </li>
          <li>
            <Link className="high-link">HISERISE</Link>
          </li>
          <li>
            <Link className="high-link">LOWRISE</Link>
          </li>
        </ul>
        <div>
          <h2 className="new-font">HIGH-RISE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            quidem eligendi neque dolore repudiandae, est iusto consequuntur
            eius expedita adipisci. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Alias quam atque vitae maxime eaque debitis cumque
            quidem eos voluptates suscipit in consequatur officiis hic cum totam
            repudiandae voluptatibus pariatur repellendus tempora, iusto, nulla,
            doloremque quod. Iusto earum illum nostrum est?Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Magni animi temporibus alias
            debitis hic deserunt aut sint inventore incidunt eaque et magnam,
            vel iure libero eius doloribus eos beatae. Velit?Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Laboriosam
          </p>
          <button className="btn-payment">$7</button>
        </div>
      </div>
    </section>
  );
};

export default Highrise;

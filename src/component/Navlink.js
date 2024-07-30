import { React, useRef, useEffect, useState } from "react";
import LogoImg from "../Images/City-Logo.jpg";
import { NavLink } from "react-router-dom";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import { TfiAngleDoubleUp } from "react-icons/tfi";
const Navlink = () => {
  const refLink = useRef(null);
  const refContainer = useRef(null);
  const [icons, setIcons] = useState(false);
  const [showlink, setShowLink] = useState(false);

  useEffect(() => {
    const Height = refLink.current.getBoundingClientRect().height;
    if (showlink) {
      setIcons(true);
      refContainer.current.style.minHeight = `${Height}px`;
    } else {
      setIcons(false);
      refContainer.current.style.minHeight = `0px`;
    }
  }, [showlink]);
  return (
    <nav>
      {/* ===Blur== */}
      <div className="nav-blur"></div>
      {/* ===Logo==== */}
      <div className="logo">
        <img src={LogoImg} alt="LogoImg" />
        <h2>UP-TOWN</h2>
      </div>
      {/* ==Nav Links */}
      <div className="Nav-Links" ref={refContainer}>
        <ul className="Links" ref={refLink}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? `lawn active` : `lawn`)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"about"}
              className={({ isActive }) => (isActive ? `lawn active` : `lawn`)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"contact"}
              className={({ isActive }) => (isActive ? `lawn active` : `lawn`)}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"high-rise"}
              className={({ isActive }) => (isActive ? `lawn active` : `lawn`)}
            >
              High-Rise
            </NavLink>
          </li>
          <button className="toggle-btn" onClick={() => setShowLink(!showlink)}>
            {icons ? <TfiAngleDoubleDown /> : <TfiAngleDoubleUp />}
          </button>
        </ul>
      </div>
    </nav>
  );
};
export default Navlink;

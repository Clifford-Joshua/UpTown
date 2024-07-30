import React from "react";
import Navlink from "./component/Navlink";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
const Sharedpage = () => {
  return (
    <>
      <Navlink />
      <Outlet />
      <Footer />
    </>
  );
};

export default Sharedpage;

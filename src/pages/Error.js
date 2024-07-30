import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="pages">
      <h2>404 Error Message</h2>
      <p>Page not found</p>
      <Link to={"/"}>back to home</Link>
    </section>
  );
};

export default Error;

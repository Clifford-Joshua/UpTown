import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h2>404 Error Message</h2>
      <p>Page not found</p>
      <Link to={"/"}>back to home</Link>
    </div>
  );
};

export default Error;

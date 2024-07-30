import React from "react";
import Error from "./pages/Error";
import About from "./pages/About";
import Homepage from "./pages/Home";
import Contact from "./pages/Contact";
import Sharedpage from "./Sharedpage";
import Highrise from "./pages/Highrise";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sharedpage />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="high-rise" element={<Highrise />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/landing";
import Assignment1 from "./Pages/assignment1";
import Assignment2 from "./Pages/assignment2";
import Assignment3 from "./Pages/assignment3";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/assignment1" element={<Assignment1 />} />
        <Route exact path="/assignment2" element={<Assignment2 />} />
        <Route exact path="/assignment3" element={<Assignment3 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

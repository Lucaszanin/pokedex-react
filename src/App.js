import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Details from "./components/Details/Details";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

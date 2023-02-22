import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Details from "./components/Details/Details";
import Home from "./components/Home/Home";
import { ThemeProvider } from "./Contexts/theme-context";

function App() {
  return (
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:name" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;

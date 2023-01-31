import React, { useEffect } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Home />
      <div className="cardContainer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;

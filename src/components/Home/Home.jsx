import React from "react";
import heroImg from "./assets/hero.png";
import "./Home.css";
import pokebola from "./assets/pokebola.png";
import pokebolaBackground from "./assets/pokebola-contorno.png";
import { Waves } from "../Waves/Waves";

function Home() {
  return (
    <>
      <div className="container">
        <img
          className="pokebolaBackground"
          src={pokebolaBackground}
          alt="Pokebola"
        />
        <img
          className="pokebolaBackground_2"
          src={pokebolaBackground}
          alt="Pokebola"
        />
        <div className="home-left">
          <h2>Welcome to</h2>
          <h1 className="title">Pokedex</h1>
        </div>
        <div className="divider">
          <img className="pokebola" src={pokebola} alt="Pokebola" />
        </div>
        <div className="hero">
          <img src={heroImg} alt="Imagem com vários pokemons" />
        </div>
      </div>
      <div className="animationHero">
        <Waves />
      </div>
    </>
  );
}

export default Home;

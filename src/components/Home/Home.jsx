import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import { GET_POKEMON } from "../../API/Api";
import Card from "../Card/Card";
import { Waves } from "../Waves/Waves";
import heroImg from "./assets/hero.png";
import pokebolaBackground from "./assets/pokebola-contorno.png";
import pokebola from "./assets/pokebola.png";
import "./Home.css";

function Home() {
  const { request, data } = useFetch();
  const [pokemonList, setPokemonList] = useState([]);
  // const [contador, setContador] = useState(0);

  useEffect(() => {
    async function getPokemons() {
      for (let i = 1; i <= 20; i++) {
        const { url, options } = GET_POKEMON(i);
        let { json } = await request(url, options);
        setPokemonList((prevList) => [...prevList, json]);
      }
    }

    getPokemons();
  }, []);

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

        <div className="cardWrapper">
          {pokemonList && pokemonList.map(({ name, id, types, sprites }, index) => (
            <Card
              key={index}
              id={id}
              name={name}
              type={types[0]?.type?.name}
              img={sprites?.other?.dream_world?.front_default}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;

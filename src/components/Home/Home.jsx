import { useEffect, useState } from "react";
import { GET_POKEMONS } from "../../API/Api";
import useFetch from "../../Hooks/useFetch";
import heroImg from "./assets/hero.png";
import pokebolaBackground from "./assets/pokebola-contorno.png";
import pokebola from "./assets/pokebola.png";
import pokebolaIcon from "./assets/pokebolaIcon.png";
import Card from "../Card/Card";
import { Waves } from "../Waves/Waves";
import "./Home.css";
import { ButtonWrapper, ButtonViewMore, PokebolaIcon } from "./styles";

function Home() {
  const { request, data } = useFetch();
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOfsset] = useState(0);

  useEffect(() => {
    async function getPokemons() {
      const { url, options } = GET_POKEMONS(offset);
      const { json } = await request(url, options);
      setPokemonList(json.results);
    }
    getPokemons();
  }, [offset]);

  useEffect(() => {
    function getPokemon() {
      pokemonList?.forEach(async (pokemon) => {
        const response = await fetch(pokemon?.url);
        const json = await response.json();
        setPokemon((prev) => [...prev, json]);
      });
    }

    getPokemon();
  }, [pokemonList]);

  console.log("Offset Atual", offset);

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
          {pokemon &&
            pokemon.map(({ name, id, types, sprites }, index) => (
              <Card
                key={index}
                id={id}
                name={name}
                type={types[0]?.type?.name}
                img={sprites?.other?.dream_world?.front_default}
              />
            ))}
        </div>
        <ButtonWrapper>
          <ButtonViewMore onClick={() => setOfsset(offset + 10)}>
            <PokebolaIcon src={pokebolaIcon} alt="Icone Pokebola Azul" /> View
            More
          </ButtonViewMore>
        </ButtonWrapper>
      </div>
    </>
  );
}

export default Home;

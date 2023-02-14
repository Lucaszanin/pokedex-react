import { useEffect, useState } from "react";
import { GET_POKEMON, GET_POKEMONS } from "../../API/Api";
import useFetch from "../../Hooks/useFetch";
import Card from "../Card/Card";
import Input from "../Input/Input";
import Header from "../Header/Header";
import { Waves } from "../Waves/Waves";
import searchIcon from "./assets/search.png";
import heroImg from "./assets/hero.png";
import HomeIcon from "./assets/home.png";
import pokebolaBackground from "./assets/pokebola-contorno.png";
import pokebola from "./assets/pokebola.png";
import pokebolaIcon from "./assets/pokebola.png";
import Loading from "../Helper/Loading";
import {
  ButtonSearch,
  ButtonViewMore,
  ButtonWrapper,
  CardWrapper,
  ContainerSearch,
  IconSearch,
  Divider,
  PokebolaIcon,
  ContainerHome,
  PokebolaBackgroundLeft,
  PokebolaBackgroundRigth,
  ContentLeft,
  SubTitle,
  Title,
  DividerHero,
  ImgDivider,
  Hero,
  HeroImg,
  ButtonHome,
  IconHome,
  LinkWrapper,
  WrapperInput,
} from "./styles";
import Footer from "../Footer/Footer";

function Home() {
  const { request, loading, data } = useFetch();
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [offset, setOfsset] = useState(0);

  useEffect(() => {
    async function getPokemons() {
      const { url, options } = GET_POKEMONS(offset);
      const { json } = await request(url, options);
      setPokemonList(json.results);
    }
    getPokemons();
  }, [offset, request]);

  useEffect(() => {
    function getPokemon() {
      pokemonList?.forEach(async (pokemon) => {
        const response = await fetch(pokemon?.url);
        const json = await response.json();
        setPokemons((prev) => [...prev, json]);
      });
    }
    getPokemon();
  }, [pokemonList]);

  async function handleClick() {
    const { url, options } = GET_POKEMON(`${pokemonName.toLowerCase()}`);
    const { json } = await request(url, options);
    setPokemon(json);
    setPokemons([]);
    setPokemonName("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setPokemons([]);
    setPokemonName("");
  }

  function handleChange({ target }) {
    setPokemonName(target.value);
  }

  function ViewMore() {
    setOfsset(offset + 8);
  }

  async function homeFunction() {
    pokemonList?.forEach(async (pokemon) => {
      const response = await fetch(pokemon?.url);
      const json = await response.json();
      setPokemons((prev) => [...prev, json]);
    });
    setPokemon([]);
    console.log("Offset Atual", offset, "PokemonList", pokemonList);
  }

  return (
    <>
      <Header />
      <ContainerHome>
        <PokebolaBackgroundLeft src={pokebolaBackground} alt="Pokebola" />
        <PokebolaBackgroundRigth src={pokebolaBackground} alt="Pokebola" />
        <ContentLeft>
          <SubTitle>Welcome to</SubTitle>
          <Title>Pokedex</Title>
        </ContentLeft>
        <DividerHero>
          <ImgDivider src={pokebola} alt="Pokebola" />
        </DividerHero>
        <Hero>
          <HeroImg src={heroImg} alt="Imagem com vários pokemons" />
        </Hero>
      </ContainerHome>
      <Waves />

      <ContainerSearch>
        <LinkWrapper>
          <ButtonHome onClick={homeFunction}>
            <IconHome src={HomeIcon} alt="" />
            <span>Home</span>
          </ButtonHome>
        </LinkWrapper>
        <form onSubmit={handleSubmit}>
          <WrapperInput>
            <Input onChange={handleChange} value={pokemonName} />
            <ButtonSearch onClick={handleClick}>
              <IconSearch src={searchIcon} alt="" />
            </ButtonSearch>
          </WrapperInput>
        </form>
      </ContainerSearch>
      <Divider />

      <CardWrapper>
        {loading && <Loading />}
        {pokemons &&
          pokemons.map(({ name, id, types, sprites }, index) => (
            <Card
              key={index}
              id={id}
              name={name}
              type={types[0]?.type?.name}
              type2={types[1]?.type?.name}
              img={sprites?.other?.dream_world?.front_default}
            />
          ))}

        {loading && <Loading />}
        {pokemon.length === 0 ? (
          <div></div>
        ) : (
          <Card
            id={pokemon?.id}
            name={pokemon?.name}
            // type={pokemon?.types[0].type?.name}
            // type2={pokemon?.types[1].type?.name}
            img={pokemon?.sprites?.other?.dream_world?.front_default}
          />
        )}
      </CardWrapper>
      <ButtonWrapper>
        <ButtonViewMore onClick={ViewMore}>
          <PokebolaIcon src={pokebolaIcon} alt="Icone Pokebola Azul" /> View
          More
        </ButtonViewMore>
      </ButtonWrapper>
      <Divider />
      <Footer />
    </>
  );
}

export default Home;

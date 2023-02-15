import { useEffect, useState } from "react";
import { GET_POKEMON, GET_POKEMONS } from "../../API/Api";
import useFetch from "../../Hooks/useFetch";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Error from "../Helper/Error/Error";
import Loading from "../Helper/Loading";
import Input from "../Input/Input";
import { Waves } from "../Waves/Waves";
import heroImg from "./assets/hero.png";
import HomeIcon from "./assets/home.png";
import pokebolaBackground from "./assets/pokebola-contorno.png";
import {
  default as pokebola,
  default as pokebolaIcon,
} from "./assets/pokebola.png";
import searchIcon from "./assets/search.png";
import {
  ButtonHome,
  ButtonSearch,
  ButtonViewMore,
  ButtonWrapper,
  CardWrapper,
  ContainerHome,
  ContainerSearch,
  ContentLeft,
  Divider,
  DividerHero,
  Hero,
  HeroImg,
  IconHome,
  IconSearch,
  ImgDivider,
  LinkWrapper,
  PokebolaBackgroundLeft,
  PokebolaBackgroundRigth,
  PokebolaIcon,
  SubTitle,
  Title,
  WrapperInput,
} from "./styles";

function Home() {
  const { request, loading, error, setError } = useFetch();
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
    const promisses = pokemonList?.map(async ({ url }) => {
      const response = await fetch(url);
      const json = await response.json();
      const listPokemon = Promise.all(promisses);
      setPokemons((prev) => [...prev,json]);
      console.log(listPokemon);
    });
  }, [pokemonList, request]);

  async function handleClick() {
    let json;
    let response;
    const { url, options } = GET_POKEMON(`${pokemonName.toLowerCase()}`);
    ({ json, response } = await request(url, options));

    {
      if (response.ok) {
        setPokemon(json);
      }
      if (response.ok === false) {
        setPokemon([]);
      }
    }
    setPokemons([]);
    setPokemonName("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setPokemonName("");
    setOfsset(0);
  }
  console.log(pokemons);
  function handleChange({ target }) {
    setPokemonName(target.value);
  }

  function ViewMore() {
    setOfsset(offset + 8);
  }

  function homeFunction() {
    setOfsset(0);
    setError(null);
  }

  console.log("O ofsset está", offset);
  return (
    <>
      <Header />
      <ContainerHome>
        <PokebolaBackgroundLeft src={pokebolaBackground} alt="Pokebola" />
        <PokebolaBackgroundRigth src={pokebolaBackground} alt="Pokebola" />
        <ContentLeft>
          <SubTitle>Welcome to</SubTitle>
          <Title>Pokédex</Title>
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

        {error && <Error error={error} />}
        {loading && <Loading />}
        {pokemon.length === 0 ? null : (
          <Card
            id={pokemon?.id}
            name={pokemon?.name}
            type={pokemon?.types[0] && pokemon?.types[0].type?.name}
            type2={pokemon?.types[1] && pokemon?.types[1].type?.name}
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

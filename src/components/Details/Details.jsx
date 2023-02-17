import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import useFetch from "../../Hooks/useFetch";
import { GET_POKEMON } from "../../API/Api";
import Loading from "../Helper/Loading";
import {
  PokebolaBackgroundLeft,
  PokebolaBackgroundRigth,
  Container,
  PokemonId,
  PokemonName,
  PokemonImage,
  ImageWrapper,
  DetailsWrapper,
  DetailsLeft,
  DetailsRigth,
  TitleDetail,
  SpanDetail,
  DetailText,
  Detail,
  EvolutionImg,
  WrapperEvolution,
  EvolutionContorno,
  DetailAbitities,
  PokemonNameBig,
  DetailMoves,
  AnimeteImgPokemon,
  WrapperContentTop,
} from "./styles";
import pokebolaBackground from "../Home/assets/pokebola-contorno.png";

function Details() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState();
  const { request, loading, data } = useFetch();

  useEffect(() => {
    const { url, options } = GET_POKEMON(name);
    request(url, options);
  }, [request]);

  if (loading) return <Loading />;
  return (
    <div>
      <Header />
      <PokebolaBackgroundLeft src={pokebolaBackground} alt="Pokebola" />
      <PokebolaBackgroundRigth src={pokebolaBackground} alt="Pokebola" />
      <Container className="animeLeft">
        <WrapperContentTop>
          <PokemonId># {data?.id}</PokemonId>
          <PokemonName>{data?.name}</PokemonName>
        </WrapperContentTop>
        <ImageWrapper>
          <PokemonNameBig>{data?.name}</PokemonNameBig>
          <AnimeteImgPokemon></AnimeteImgPokemon>
          <PokemonImage
            src={data?.sprites?.other?.dream_world?.front_default}
            alt="Imagem do Pokemon"
          />
        </ImageWrapper>
        <TitleDetail>About🗣</TitleDetail>
        <DetailsWrapper>
          <DetailsLeft>
            <Detail>
              <SpanDetail>Height </SpanDetail>
              <DetailText>▶ {(data?.height / 10).toFixed()} m</DetailText>
            </Detail>
            <Detail>
              <SpanDetail>Weigth </SpanDetail>
              <DetailText>▶ {data?.weight / 10} Kg</DetailText>
            </Detail>
            <Detail>
              <SpanDetail>Type ▶</SpanDetail>
              {data?.types?.map(({ type }) => (
                <DetailText>{type.name}</DetailText>
              ))}
            </Detail>
          </DetailsLeft>
          <DetailsRigth>
            <SpanDetail>Moves ▶</SpanDetail>
            <DetailMoves>
              {data?.moves?.map(({ move }) => (
                <DetailText>{move.name}</DetailText>
              ))}
            </DetailMoves>
          </DetailsRigth>
        </DetailsWrapper>
        <DetailAbitities>
          <TitleDetail>Abilites🏋️‍♂️</TitleDetail>
        </DetailAbitities>
        <Detail>
          <DetailText>
            <SpanDetail>
              ▶{" "}
              {data?.abilities?.map(({ ability }) =>
                ability.name.replace("-", " ")
              )}
            </SpanDetail>
          </DetailText>
        </Detail>
        <TitleDetail>Evolution 📈</TitleDetail>
        <WrapperEvolution>
          <EvolutionContorno>
            <EvolutionImg
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
              alt=""
            />
          </EvolutionContorno>
          <EvolutionContorno>
            <EvolutionImg
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg"
              alt=""
            />
          </EvolutionContorno>
        </WrapperEvolution>
      </Container>
      <Footer />
    </div>
  );
}

export default Details;

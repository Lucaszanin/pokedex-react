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
  DetailAbitities,
  PokemonNameBig,
  DetailMoves,
  AnimeteImgPokemon,
  WrapperContentTop,
} from "./styles";
import pokebolaBackground from "../Home/assets/pokebola-contorno.png";

function Details() {
  const { name } = useParams();
  const { request, loading, data } = useFetch();

  useEffect(() => {
    const { url, options } = GET_POKEMON(name);
    request(url, options);

    if (data) {
      const { abilities } = data;
      abilities?.forEach(async ({ ability }) => {
        const response = await request(ability.url);
        console.log(response);
      });
    }
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
        <TitleDetail>About</TitleDetail>
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
              {data?.types?.map(({ type }, index) => (
                <DetailText key={index}>{type.name}</DetailText>
              ))}
            </Detail>
          </DetailsLeft>
          <DetailsRigth>
            <SpanDetail>Moves ▶</SpanDetail>
            <DetailMoves>
              {data?.moves?.map(({ move }, index) => (
                <DetailText key={index}>{move.name}</DetailText>
              ))}
            </DetailMoves>
          </DetailsRigth>
        </DetailsWrapper>
        <DetailAbitities>
          <TitleDetail>Abilites</TitleDetail>
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
      </Container>
      <Footer />
    </div>
  );
}

export default Details;

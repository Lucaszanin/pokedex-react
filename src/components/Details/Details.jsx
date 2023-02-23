import React, { useEffect, useState, useContext } from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import Footer from "../Footer/Footer";
import { ThemeContext } from "../../Contexts/theme-context";
import { PokemonType } from "../Card/TypesPokemon/PokemonType";
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
  ListDetails,
  ListItemDetails,
  DetailTextMoves,
  TypePokemon,
  NameType,
  IconTypePokemon,
  MovesWrapper,
  DetailBody,
  Button,
} from "./styles";
import pokebolaBackground from "../Home/assets/pokebola-contorno.png";

function Details() {
  const { name } = useParams();
  const { request, loading, data } = useFetch();
  const [habilities, setHabilities] = useState([]);

  useEffect(() => {
    const { url, options } = GET_POKEMON(name);
    request(url, options);
  }, [request, name]);

  useEffect(() => {
    if (data) {
      const { abilities } = data;
      const promisses = abilities?.map(async ({ ability }) => {
        const response = await fetch(ability.url);
        const json = await response.json();
        Promise.all(promisses);
        setHabilities((prev) => [...prev, json?.effect_entries?.[1]?.effect]);
      });
    }
  }, [data]);

  const { theme } = useContext(ThemeContext);

  if (loading) return <Loading />;
  return (
    <DetailBody
      style={{ color: theme.color, backgroundColor: theme.background }}
    >
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
        <Button>
          <FaArrowCircleDown
            style={{
              width: "40px",
              height: "40px",
              position: "absolute",
              top: "-150px",
            }}
          />
        </Button>
        <TitleDetail>About</TitleDetail>
        <DetailsWrapper>
          <DetailsLeft>
            <Detail>
              <SpanDetail>Height ▶</SpanDetail>
              <DetailText> {(data?.height / 10).toFixed()}m</DetailText>
            </Detail>
            <Detail>
              <SpanDetail>Weigth ▶</SpanDetail>
              <DetailText>{(data?.weight / 8).toFixed()}Kg</DetailText>
            </Detail>
            <Detail>
              <SpanDetail>Types ▶</SpanDetail>
              {data?.types?.map(({ type }, index) => (
                <TypePokemon>
                  <IconTypePokemon>
                    <PokemonType type={type.name} />
                    <NameType>{type.name}</NameType>
                  </IconTypePokemon>
                </TypePokemon>
              ))}
            </Detail>
          </DetailsLeft>
          <DetailsRigth>
            <MovesWrapper>
              <SpanDetail>Movements ▶</SpanDetail>
            </MovesWrapper>
            <DetailMoves>
              {data?.moves?.map(({ move }, index) => (
                <DetailTextMoves key={index}>{move.name}</DetailTextMoves>
              ))}
            </DetailMoves>
          </DetailsRigth>
        </DetailsWrapper>
        <DetailAbitities>
          <TitleDetail>Skills</TitleDetail>
        </DetailAbitities>
        <Detail>
          <DetailText>
            <SpanDetail>
              <ListDetails>
                {data?.abilities?.map(({ ability }, index) => (
                  <ListItemDetails>
                    {ability.name}
                    <DetailText>{habilities[index]}</DetailText>
                  </ListItemDetails>
                ))}
              </ListDetails>
            </SpanDetail>
          </DetailText>
        </Detail>
      </Container>
      <Footer />
    </DetailBody>
  );
}

export default Details;

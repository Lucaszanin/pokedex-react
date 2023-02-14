import styled from "styled-components";
export const PokebolaBackgroundLeft = styled.img`
  top: 20%;
  left: calc(100vw - 17%);
  width: 30vw;
  position: fixed;
  z-index: -1;
  opacity: 0.1;

  @media (max-width: 1024px) {
    width: 49vw;
  }

  @media (max-width: 768px) {
    left: calc(100vw - 24%);
  }

  @media (max-width: 425px) {
    width: 70vw;
    left: calc(100vw - 30%);
  }

  @media (max-width: 320px) {
    left: calc(100vw - 17%);
  }
`;

export const PokebolaBackgroundRigth = styled.img`
  top: 20%;
  right: calc(100vw - 17%);
  width: 30vw;
  position: fixed;
  z-index: -1;
  opacity: 0.1;
  @media (max-width: 1024px) {
    width: 49vw;
  }

  @media (max-width: 768px) {
    right: calc(100vw - 24%);
  }

  @media (max-width: 425px) {
    width: 70vw;
    right: calc(100vw - 30%);
  }

  @media (max-width: 320px) {
    right: calc(100vw - 17%);
  }
`;

export const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 40px;
`;

export const DivAnimateImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 40px;
  position: relative;
  animation: AnimeteImg 3s ease 0s infinite normal none running animate;
`;

export const PokemonId = styled.p`
  color: rgb(247, 186, 21);
  font-weight: 600;
  font-size: 45px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const PokemonName = styled.span`
  color: #fff;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 35px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const PokemonNameBig = styled.span`
  color: #1f75cc2f;
  font-weight: 600;
  font-size: 13rem;
  text-align: center;
  display: flex;
  width: 100%;
  justify-content: center;
  text-transform: uppercase;
  position: absolute;
  top: -10px;
  left: 0;
  z-index: -1;
  text-shadow: 5px 5px #353d64;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const PokemonImage = styled.img`
  width: 450px;
  margin-top: 30px;
  z-index: 5;
  filter: drop-shadow(20px 20px 3px #232323);
`;

export const DetailsWrapper = styled.div`
  display: flex;
  width: 90rem;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const DetailsLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const DetailsRigth = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const Detail = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SpanDetail = styled.span`
  color: #f7ba15;
  font-weight: 700;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const TitleDetail = styled.h1`
  color: #fff;
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 40px;
  margin-top: 40px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export const DetailText = styled.p`
  color: #fff;
  font-weight: 300;
  font-size: 20px;
  text-transform: capitalize;
  margin: 5px 0 0 10px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const DetailMoves = styled.div`
  color: #fff;
  font-weight: 300;
  font-size: 20px;
  padding: 10px 0;
  width: 50%;
  height: 150px;
  overflow-y: scroll;
  text-transform: capitalize;
  display: block;
  margin-left: -10px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const AnimeteImgPokemon = styled.div`
  animation: is-rotating 2s infinite;
  border: 6px solid transparent;
  border-radius: 50%;
  border-top-color: #c0bfc25f;
  width: 500px;
  height: 500px;
  position: absolute;
`;

export const WrapperEvolution = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const EvolutionContorno = styled.div`
  width: 200px;
  height: 200px;
  margin-top: 30px;
  filter: drop-shadow(4px 4px 4px #3f5df3);
  &:hover {
    filter: none;
  }
`;

export const DetailAbitities = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const EvolutionImg = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 30px;
  opacity: 1.06;
  filter: brightness(0%);
  transition: all 0.4s ease-in;
  cursor: pointer;

  &:hover {
    filter: brightness(100%);
  }
`;

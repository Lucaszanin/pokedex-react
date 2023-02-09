import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  max-width: 80rem;
  margin: 0 auto;
  align-items: center;
  position: relative;
  justify-content: space-between;
`;

export const PokebolaBackgroundLeft = styled.img`
  top: 20%;
  left: calc(100vw - 17%);
  width: 30vw;
  position: fixed;
  z-index: -1;
  opacity: 0.1;
`;

export const PokebolaBackgroundRigth = styled.img`
  top: 20%;
  right: calc(100vw - 17%);
  width: 30vw;
  position: fixed;
  z-index: -1;
  opacity: 0.1;
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubTitle = styled.h2`
  font-size: 50px;
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: #fff;
`;

export const DividerHero = styled.div`
  position: relative;
  width: 2px;
  background-color: #586080;
  height: 70vh;
  border-radius: 80%;
`;

export const ImgDivider = styled.img`
  width: 2vw;
  position: absolute;
  top: 33vh;
  right: -1vw;
`;

export const Hero = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeroImg = styled.img`
  max-width: 30vw;
  transform: translateY(0px);
  animation: floatHero 4s ease-in-out infinite;
  filter: drop-shadow(17px 13px 19px #000);
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  margin-top: -30px;
  margin-right: 20px;
  font-size: 120px;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  color: #f6b915;
  filter: drop-shadow(25px 10px 4px #2b2a2a);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const PokebolaIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  transition: all 0.4s ease-in;
  filter: drop-shadow(5px 5px 1px #2b2a2a);
`;

export const ButtonViewMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 25px;
  font-size: 25px;
  color: #fff;
  background: #fc1c1c;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s ease-in;

  &:hover {
    filter: drop-shadow(5px 5px 10px #be0404);
  }
`;

export const CardWrapper = styled.div`
  max-width: 90rem;
  padding-top: 100px;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
`;

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  max-width: 90rem;
  margin: 0 auto;
`;

export const ButtonSearch = styled.button`
  background: transparent;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  position: absolute;
  left: 29rem;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Divider = styled.div`
  max-width: 85rem;
  height: 1px;
  margin: 20px auto 0;
  background: #f7f5f51f;
  box-shadow: 5px -1px 7px #7e63f7;
`;

export const IconSearch = styled.img`
  width: 70px;
`;

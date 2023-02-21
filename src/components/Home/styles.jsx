import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  max-width: 80rem;
  margin: 0 auto;
  align-items: center;
  position: relative;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

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

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const SubTitle = styled.h2`
  font-size: 50px;
  padding: 0;
  margin: 0;
  text-align: center;
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

  @media (max-width: 1024px) {
    margin: 20px 0;
    width: 70vw;
    height: 2px;
  }
`;

export const ImgDivider = styled.img`
  width: 2vw;
  position: absolute;
  top: 33vh;
  right: -1vw;

  @media (max-width: 1024px) {
    top: -24px;
    left: 50%;
    width: 5vw;
  }

  @media (max-width: 425px) {
    top: -19px;
    left: 45%;
    width: 10vw;
  }
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

  @media (max-width: 1024px) {
    max-width: 50vw;
  }

  @media (max-width: 425px) {
    max-width: 80vw;
  }

  @media (max-width: 320px) {
    max-width: 90vw;
  }
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

  @media (max-width: 1024px) {
    font-size: 90px;
  }

  @media (max-width: 425px) {
    font-size: 50px;
    margin-right: 0;
  }
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
  background: linear-gradient(rgb(21, 26, 55) 0%, rgba(21, 26, 55, 0) 100%);
  border: 1px solid rgb(36, 41, 63);
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s ease-in;
  filter: drop-shadow(2px 1px 1px #e6e6e957);

  &:hover {
    filter: drop-shadow(5px 5px 10px #3815fc);
  }
`;

export const CardWrapper = styled.div`
  max-width: 90rem;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 90rem;
  margin: 50px auto 0;

  @media (max-width: 1024px) {
    padding: 20px;
    margin: 30px auto 0;
  }

  @media (max-width: 425px) {
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    margin: 15px auto 0;
  }
`;

export const WrapperInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ButtonSearch = styled.button`
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in;
  position: absolute;
  left: 91%;
  top: 0;

  @media (max-width: 425px) {
    left: 87%;
  }
  @media (max-width: 375px) {
    left: 84%;
  }
  @media (max-width: 320px) {
    left: 80%;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const Divider = styled.div`
  max-width: 100%;
  height: 1px;
  margin: 20px auto 10px;
  background: #f7f5f51f;
  box-shadow: 5px -1px 7px #7e63f7;
`;

export const IconSearch = styled.img`
  width: 51px;
  @media (max-width: 425px) {
    width: 52px;
  }
`;

export const ButtonHome = styled.button`
  text-decoration: none;
  display: flex;
  font-weight: 700;
  align-items: center;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  background: transparent;
  font-family: "Poppins", sans-serif;
  padding: 5px 10px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  &:hover {
    box-shadow: 1px 1px 10px #7e63f7;
  }

  @media (max-width: 425px) {
    margin-bottom: 10px;
  }
`;

export const IconHome = styled.img`
  width: 40px;
  margin-right: 8px;
  cursor: pointer;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
  @media (max-width: 425px) {
    margin-left: 0;
  }
`;

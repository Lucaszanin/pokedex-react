import React from "react";
import MenuIcons from "../Menu/Menu";
import { FooterContainer, FooterText } from "./styles";

function Footer() {
  return (
    <FooterContainer>
      <div>
        <FooterText>
          Direitos de imagem para Nintendo & The Pokémon Company
        </FooterText>
        <FooterText>Dados pegos da API - pokeapi.co</FooterText>
        <FooterText>Desenvolvido por Lucas Zanin Dev Front-End</FooterText>
      </div>
      <MenuIcons />
    </FooterContainer>
  );
}

export default Footer;

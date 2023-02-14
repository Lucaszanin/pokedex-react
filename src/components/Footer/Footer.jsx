import React from "react";
import MenuIcons from "../Menu/Menu";
import BackTopButton from "../BackTopButton/BackTopButton";
import { FooterContainer, FooterText } from "./styles";

function Footer() {
  return (
    <FooterContainer>
      <div>
        <FooterText>
          Direitos de imagem para Nintendo & The Pokémon Company
        </FooterText>
        <FooterText>Desenvolvido por Lucas Zanin Dev Front-End</FooterText>
      </div>
      <MenuIcons />
      <BackTopButton />
    </FooterContainer>
  );
}

export default Footer;

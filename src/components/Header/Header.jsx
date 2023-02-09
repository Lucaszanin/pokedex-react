import React from "react";
import MenuIcons from "../Menu/Menu";
import Logo from "./Assets/logo.svg";
import { HeaderContainer, LogoPokedex } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <LogoPokedex src={Logo} alt="" />
      </a>
      <MenuIcons/>
    </HeaderContainer>
  );
}

export default Header;

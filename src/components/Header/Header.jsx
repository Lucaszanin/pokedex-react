import React from "react";
import MenuIcons from "../Menu/Menu";
import Logo from "./Assets/logo.png";
import { Link } from "react-router-dom";
import { HeaderContainer, LogoPokedex } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoPokedex src={Logo} alt="" />
      </Link>
      <MenuIcons />
    </HeaderContainer>
  );
}

export default Header;

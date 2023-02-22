import React, { useContext } from "react";
import MenuIcons from "../Menu/Menu";
import Logo from "./Assets/logo.png";
import { Link } from "react-router-dom";
import { HeaderContainer, LogoPokedex, TogglerContainer } from "./styles";
import ThemeTogglerButton from "../Theme Toggler/ThemeTogglerButton";

function Header() {
  return (
    <>
      <TogglerContainer>
        <ThemeTogglerButton />
      </TogglerContainer>
      <HeaderContainer>
        <Link to="/">
          <LogoPokedex src={Logo} alt="" />
        </Link>
        <MenuIcons />
      </HeaderContainer>
    </>
  );
}

export default Header;

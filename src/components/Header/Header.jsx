import React from "react";
import Logo from "./Assets/logo.svg";
import Github from "./Assets/github.png";
import Linkedin from "./Assets/linkedin.png";
import {
  HeaderContainer,
  LogoPokedex,
  Menu,
  MenuList,
  ImgsItem,
} from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <LogoPokedex src={Logo} alt="" />
      </a>
      <Menu>
        <MenuList>
          <a href="https://github.com/Lucaszanin" target="_blank">
            <li>
              <ImgsItem src={Github} alt="" />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-zanin-083167106/"
            target="_blank"
          >
            <li>
              <ImgsItem src={Linkedin} alt="" />
            </li>
          </a>
        </MenuList>
      </Menu>
    </HeaderContainer>
  );
}

export default Header;

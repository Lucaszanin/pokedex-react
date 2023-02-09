import React from "react";
import Github from "./Assets/github.png";
import Linkedin from "./Assets/linkedin.png";
import { Menu, MenuList, ImgsItem } from "./styles";

function MenuIcons() {
  return (
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
  );
}

export default MenuIcons;

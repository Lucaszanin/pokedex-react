import styled from "styled-components";

export const Menu = styled.nav`
  display: flex;
  align-items: center;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
`;

export const ImgsItem = styled.img`
  width: 40px;
  margin-right: 10px;

  &:hover {
    filter: drop-shadow(1px 1px 5px #6d4ff3);
  }
`;

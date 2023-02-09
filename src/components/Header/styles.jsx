import styled from "styled-components";

export const HeaderContainer = styled.div`
  max-width: 80rem;
  padding: 20px 0;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
`;

export const LogoPokedex = styled.img`
  width: 200px;
  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(3px 3px 10px #6d4ff3);
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const ImgsItem = styled.img`
  width: 40px;
  margin-right: 10px;

  &:hover {
    filter: drop-shadow(1px 1px 5px #6d4ff3);
  }
`;

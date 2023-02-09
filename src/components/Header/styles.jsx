import styled from "styled-components";

export const HeaderContainer = styled.div`
  max-width: 80rem;
  padding: 40px;
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



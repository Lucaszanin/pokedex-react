import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const PokebolaIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  transition: all 0.4s ease-in;
`;

export const ButtonViewMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 25px;
  font-size: 25px;
  color: #333;
  background: #8396f5;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s ease-in;

  &:hover {
    background: #353d64;
    filter: drop-shadow(3px 3px 5px #737373);
    color: #f7ba15;
  }
`;

import styled from "styled-components";

export const InputContainer = styled.div`
  max-width: 74rem;
  padding: 0 0 0 40px;
  @media (max-width: 425px) {
    padding: 0;
  }
`;

export const InputSearch = styled.input`
  height: 50px;
  max-height: 50px;
  padding: 10px;
  max-width: 30rem;
  width: 30rem;
  color: white;
  background-color: #333;
  border-left: 2px solid #586080;
  border-top: 2px solid #586080;
  border-bottom: 2px solid #586080;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active {
    box-shadow: 5px -1px 40px #6d4ff3;
  }

  @media (max-width: 656px) {
    width: 23rem;
  }
  @media (max-width: 375px) {
    width: 21rem;
  }

  @media (max-width: 320px) {
    width: 17.5rem;
  }
`;

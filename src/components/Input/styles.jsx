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
  max-width: 30rem;
  width: 30rem;
  color: white;
  background-color: #333;
  border: 2px solid #586080;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active {
    box-shadow: 5px -1px 40px #6d4ff3;
  }

  @media (max-width: 425px) {
    width: 15rem;
  }
`;

import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 90rem;
  height: 70px;
  margin: 0 auto;
  padding: 40px;
  @media (max-width: 425px) {
    flex-direction: column;
    height: 100%;
    padding: 20px;
  }
`;

export const FooterText = styled.p`
  font-size: 16px;
  line-height: 1.4;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  font-weight: 400;
  @media (max-width: 425px) {
    margin-bottom: 10px;
  }
`;

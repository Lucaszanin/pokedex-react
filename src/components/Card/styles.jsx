import styled from "styled-components";

export const CardContent = styled.div`
  background: #353d64;
  width: 250px;
  display: flex;
  margin-bottom: 50px;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 40px;
  position: relative;
  height: 300px;
  box-shadow: 10px 10px 15px -5px rgba(0, 0, 0, 0.8);
  margin-top: 70px;
`;

export const ImagemPokemon = styled.img`
  position: absolute;
  top: calc(350px - 480px);
  left: 0px;
  z-index: 1;
  width: 250px;
  height: 250px;
  filter: drop-shadow(8px 9px 14px #232323);
  transition: all 0.3s ease-in;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Details = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PokemonName = styled.span`
  color: #fff;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const PokemonId = styled.p`
  color: rgb(247, 186, 21);
  font-weight: 600;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ButtonDetails = styled.button`
  background: #f7ba15;
  color: #333;
  font-weight: 600;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px 15px;
  border-radius: 50px;
  margin-top: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 5px 10px 4px -5px rgba(0, 0, 0, 0.5);

  &:hover {
    transform: scale(1.08);
    color: #fff;
  }
`;

export const IconTypePokemon = styled.div`
  background: #586080;
  border-radius: 50%;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export const TypePokemon = styled.div`
  color: #ffff;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px 15px;
  border-radius: 50px;
  text-transform: capitalize;
`;

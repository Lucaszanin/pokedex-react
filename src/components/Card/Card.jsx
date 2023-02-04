import fire from "../Card/TypesPokemon/Assets/pokemonTypes/fire.svg";

import {
  ButtonDetails,
  CardContent,
  Details,
  IconTypePokemon,
  ImagemPokemon,
  PokemonId,
  PokemonName,
  TypePokemon,
} from "./styles";

function Card({ id, name, img, type }) {
  return (
    <div className="container">
      <CardContent>
        <ImagemPokemon src={img} alt="Foto do Pokemon" />
        <Details>
          <PokemonId>#{id}</PokemonId>
          <PokemonName>{name}</PokemonName>
          <TypePokemon>
            <IconTypePokemon>
              <img src={fire} alt="" />
            </IconTypePokemon>
            {type}
          </TypePokemon>
        </Details>
        <ButtonDetails>Mais Detalhes</ButtonDetails>
      </CardContent>
    </div>
  );
}

export default Card;

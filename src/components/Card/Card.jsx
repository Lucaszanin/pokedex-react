import { PokemonType } from "./TypesPokemon/PokemonType";
import { Link } from "react-router-dom";

import {
  ButtonDetails,
  CardContent,
  Details,
  IconTypePokemon,
  ImagemPokemon,
  PokemonId,
  PokemonName,
  TypePokemon,
  NameType,
  CardContainer,
} from "./styles";

function Card({ id, name, img, type, type2 }) {
  return (
    <CardContainer>
      <CardContent>
        <ImagemPokemon src={img} alt="Foto do Pokemon" />
        <Details>
          <PokemonId>#{id}</PokemonId>
          <PokemonName>{name}</PokemonName>
          <TypePokemon>
            <IconTypePokemon>
              <PokemonType type={type} />
              <NameType>{type}</NameType>
            </IconTypePokemon>

            {type2 ? (
              <IconTypePokemon>
                <PokemonType type={type2} />
                <NameType>{type2}</NameType>
              </IconTypePokemon>
            ) : null}
          </TypePokemon>
        </Details>
        <Link to={`/pokemon/${name}`}>
          <ButtonDetails>Mais Detalhes</ButtonDetails>
        </Link>
      </CardContent>
    </CardContainer>
  );
}

export default Card;

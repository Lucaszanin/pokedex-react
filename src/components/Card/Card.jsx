import { useState } from "react";
import {
  ButtonDetails, CardContent, Details, ImagemPokemon, PokemonId, PokemonName
} from "./styles";

function Card() {
  const [pokemon, setPokemon] = useState();

  async function buscaPokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/beedrill");
    const json = await response.json();
    setPokemon(json);
  }

  buscaPokemon();

  return (
    <div className="container">
      <CardContent>
        {pokemon ? (
          <>
            <ImagemPokemon
              src={pokemon?.sprites.other.dream_world.front_default}
              alt="Foto do Pokemon"
            />
            <Details>
              <PokemonName>{pokemon?.name}</PokemonName>
              <PokemonId>#{pokemon?.id}</PokemonId>
              
            </Details>
            <ButtonDetails>Mais Detalhes</ButtonDetails>
          </>
        ) : (
          <p>Pokemon não encontrado</p>
        )}
      </CardContent>
    </div>
  );
}

export default Card;

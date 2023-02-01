import { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import { GET_POKEMON } from "../../API/Api";
import {
  ButtonDetails,
  CardContent,
  Details,
  ImagemPokemon,
  PokemonId,
  PokemonName,
} from "./styles";

function Card() {
  const { request, data } = useFetch();

  useEffect(() => {
    const { url, options } = GET_POKEMON("raichu");
    request(url, options);
  }, []);

  return (
    <div className="container">
      <CardContent>
        {data ? (
          <>
            <ImagemPokemon
              src={data?.sprites.other.dream_world.front_default}
              alt="Foto do Pokemon"
            />
            <Details>
              <PokemonName>{data?.name}</PokemonName>
              <PokemonId>#{data?.id}</PokemonId>
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

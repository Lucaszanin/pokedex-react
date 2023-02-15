import { GET_POKEMON } from "../API/Api";

export const fetchPokemonList = async (page) => {
  const offset = 9 * (page - 1);

  const response = await fetch(URL);
  const data = await response.json();

  const promises = data.results.map(
    async ({ name }) => (await GET_POKEMON(name)).data
  );

  const pokemonList = Promise.all(promises);

  return pokemonList;
};

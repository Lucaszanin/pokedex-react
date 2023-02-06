export const API_URL = "https://pokeapi.co/api/v2/pokemon";

export function GET_POKEMON(name) {
  return {
    url: `${API_URL}/${name}`,
    options: {
      method: "GET",
    },
  };
}

export function GET_POKEMONS(qtde) {
  return {
    url: `${API_URL}/?offset=${qtde}&limit=8`,
    options: {
      method: "GET",
    },
  };
}

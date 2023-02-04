import { pokemonTypes }  from './Types';
import * as C from "./styles";


export const PokemonType = (props) => {
  const [{ name, color }] = pokemonTypes.filter(
    (item) => item.name === props.type
  );

  const imgUrl = new URL(
    `/src/Assets/pokemonTypes/${name}.svg`,
    import.meta.url
  ).href;

  return name && color ? (
    <C.Type
      color={color}
      value={name}
      tabIndex={props.tabIndex ? 0 : -1}
    >
      <img src={imgUrl} width={16} height={16} alt={name} />
      {name}
    </C.Type>
  ) : (
    <C.ErrorMessage>
      Ops, não foi possível encontrar o tipo desse pokémon.
    </C.ErrorMessage>
  );
};

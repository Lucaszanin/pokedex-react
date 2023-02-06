import React from "react";
import fire from "./Assets/pokemonTypes/fire.svg";
import electric from "./Assets/pokemonTypes/electric.svg";
import bug from "./Assets/pokemonTypes/bug.svg";
import dark from "./Assets/pokemonTypes/dark.svg";
import dragon from "./Assets/pokemonTypes/dragon.svg";
import fairy from "./Assets/pokemonTypes/fairy.svg";
import fighting from "./Assets/pokemonTypes/fighting.svg";
import flying from "./Assets/pokemonTypes/flying.svg";
import ghost from "./Assets/pokemonTypes/ghost.svg";
import ground from "./Assets/pokemonTypes/ground.svg";
import grass from "./Assets/pokemonTypes/grass.svg";
import ice from "./Assets/pokemonTypes/ice.svg";
import normal from "./Assets/pokemonTypes/normal.svg";
import poison from "./Assets/pokemonTypes/poison.svg";
import psychic from "./Assets/pokemonTypes/psychic.svg";
import rock from "./Assets/pokemonTypes/rock.svg";
import steel from "./Assets/pokemonTypes/steel.svg";
import water from "./Assets/pokemonTypes/water.svg";

export const PokemonType = ({ type }) => {
  switch (type) {
    
    case "fire":
      return <img src={fire} alt="Icon Fire" />;

    case "electric":
      return <img src={electric} alt="Icon Eletric" />;

    case "bug":
      return <img src={bug} alt="Icon Bug" />;

    case "dark":
      return <img src={dark} alt="Icon Dark" />;

    case "dragon":
      return <img src={dragon} alt="Icon Dark" />;

    case "fairy":
      return <img src={fairy} alt="Icon Dark" />;

    case "fighting":
      return <img src={fighting} alt="Icon Dark" />;

    case "flying":
      return <img src={flying} alt="Icon Dark" />;

    case "ghost":
      return <img src={ghost} alt="Icon Dark" />;

    case "grass":
      return <img src={grass} alt="Icon Dark" />;

    case "ground":
      return <img src={ground} alt="Icon Dark" />;

    case "ice":
      return <img src={ice} alt="Icon Dark" />;

    case "normal":
      return <img src={normal} alt="Icon Dark" />;

    case "poison":
      return <img src={poison} alt="Icon Dark" />;

    case "psychic":
      return <img src={psychic} alt="Icon Dark" />;

    case "rock":
      return <img src={rock} alt="Icon Dark" />;

    case "steel":
      return <img src={steel} alt="Icon Dark" />;

    case "water":
      return <img src={water} alt="Icon Dark" />;

    default:
      return <h1>No Icon</h1>;
  }
};

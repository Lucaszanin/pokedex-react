import React from "react";
import { InputContainer, InputSearch } from "./styles";

function Input({ onChange, value }) {

  return (
      <InputContainer>
        <InputSearch
          type="text"
          placeholder="Digite um nome para pesquisar"
          onChange={onChange}
          value={value}
        />
      </InputContainer>
  );
}

export default Input;

import React from "react";
import { InputContainer, InputSearch } from "./styles";

function Input({ onChange, value }) {

  return (
      <InputContainer>
        <InputSearch
          type="text"
          placeholder="Digite o nome de um pokemon para pesquisa-lo"
          onChange={onChange}
          value={value}
        />
      </InputContainer>
  );
}

export default Input;

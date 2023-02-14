import React from "react";
import { InputContainer, InputSearch } from "./styles";

function Input({ onChange, value }) {

  return (
      <InputContainer>
        <InputSearch
          type="text"
          placeholder="Pesquisar Pokemon"
          onChange={onChange}
          value={value}
        />
      </InputContainer>
  );
}

export default Input;

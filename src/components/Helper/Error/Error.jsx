import React from "react";
import errorGif from "./error.gif";
import { ErrorWrapper, ImgError, TextError,ErrorWContainer } from './styles'

function Error(error) {
  if (!error) return null;
  return (
    <ErrorWContainer>
      <ErrorWrapper>
        <ImgError src={errorGif} />
        <TextError>Ops Pokemon Not Found</TextError>
      </ErrorWrapper>
    </ErrorWContainer>
  );
}

export default Error;

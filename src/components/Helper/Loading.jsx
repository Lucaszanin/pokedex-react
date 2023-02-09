import React from "react";
import loadingGif from "./Assets/loading.gif";
import { LoadingWrapper, ImgLoading } from "./styles";

function Loading() {
  return (
    <LoadingWrapper>
      <ImgLoading src={loadingGif} />
    </LoadingWrapper>
  );
}

export default Loading;

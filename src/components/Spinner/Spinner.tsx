import React from "react";
import { GridLoader } from "react-spinners";
import { Color } from "ui";
import { SpinnerContainer } from "./styles";

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <GridLoader color={Color.PRIMARY} size={10} />;
    </SpinnerContainer>
  );
};

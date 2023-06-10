import React from "react";
import { Copyright, StyledFooter } from "./styles";
import { ToggleTheme } from "components";

export const Footer = () => {
  return (
    <StyledFooter>
      <Copyright>© Viktor Halas</Copyright>
      <ToggleTheme />
    </StyledFooter>
  );
};

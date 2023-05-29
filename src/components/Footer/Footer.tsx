import React, { ChangeEvent } from "react";
import { Copyright, Label, StyledFooter, SwitcherContainer } from "./styles";
import { ToggleButton } from "components";

import { toggleTheme } from "store";
import { useAppDispatch } from "store";

export const Footer = () => {
  const dispatch = useAppDispatch();
  const handleTheme = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.checked ? dispatch(toggleTheme("dark")) : dispatch(toggleTheme("light"));
  };

  return (
    <StyledFooter>
      <Copyright>© Viktor Halas</Copyright>
      <SwitcherContainer>
        <Label>Dark theme</Label>
        <ToggleButton onChange={handleTheme} />
      </SwitcherContainer>
    </StyledFooter>
  );
};

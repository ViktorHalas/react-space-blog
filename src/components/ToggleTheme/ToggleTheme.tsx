import React, { ChangeEvent } from "react";
import { toggleTheme, useAppDispatch } from "store";
import { Label, SwitcherContainer } from "./styles";
import { ToggleButton } from "components";

export const ToggleTheme = () => {
  const dispatch = useAppDispatch();
  const handleTheme = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.checked ? dispatch(toggleTheme("dark")) : dispatch(toggleTheme("light"));
  };
  return (
    <SwitcherContainer>
      <Label>Dark theme</Label>
      <ToggleButton onChange={handleTheme} />
    </SwitcherContainer>
  );
};

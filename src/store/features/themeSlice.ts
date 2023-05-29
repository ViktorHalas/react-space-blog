import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Theme } from "types";
interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, { payload }: PayloadAction<Theme>) => {
      state.theme = payload;
    },
  },
});

export default themeSlice.reducer;

export const { toggleTheme } = themeSlice.actions;
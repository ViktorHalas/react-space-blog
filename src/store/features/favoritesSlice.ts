import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BlogInfo } from "types";

interface FavoritesState {
  favorites: BlogInfo[];
}

const initialState: FavoritesState = {
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, {payload}: PayloadAction<BlogInfo>) => {
      const favoriteUnit = state.favorites.find((favorite) => favorite.id === payload.id);
      !favoriteUnit && state.favorites.push(payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    deleteFromFavorites: (state, {payload}: PayloadAction<BlogInfo>) => {
      state.favorites = state.favorites.filter((favorite) => favorite.id !== payload.id);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export default favoritesSlice.reducer;

export const { addToFavorites, deleteFromFavorites } =
  favoritesSlice.actions;
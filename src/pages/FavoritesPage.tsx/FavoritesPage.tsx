import React from "react";
import { getFavorites, useAppSelector } from "store";
import { FavoritesWrapper, Title, NoFavoritesText } from "./styles";
import { BlogList } from "components";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(getFavorites);
  return (
    <FavoritesWrapper>
      <Title>Favorites</Title>
      {favorites.length === 0 && (
        <>
          <NoFavoritesText>There's nothing here😅</NoFavoritesText>
        </>
      )}
      {favorites !== null && favorites && (
        <BlogList blog={favorites} currentBlog="articles"></BlogList>
      )}
    </FavoritesWrapper>
  );
};

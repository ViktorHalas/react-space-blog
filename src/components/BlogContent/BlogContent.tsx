import React from "react";
import { BlogInfo } from "types";
import {
  BlogContentContainer,
  Title,
  Image,
  Summary,
  OuterLink,
  FavoritesButton,
  ButtonsContainer,
} from "./styles";
import { getFavorites, getUserInfo, useAppDispatch, useAppSelector } from "store";
import { addToFavorites, deleteFromFavorites } from "store/features/favoritesSlice";

interface BlogContentProps {
  details: BlogInfo;
  isLoading: boolean;
}

export const BlogContent = ({ details, isLoading }: BlogContentProps) => {
  const { imageUrl, title, summary, url } = details;
  const { isAuth } = useAppSelector(getUserInfo);
  const { favorites } = useAppSelector(getFavorites);
  const isInFavorites = favorites
    .map((favorite) => favorite.id)
    .some((favorite) => favorite === details.id);
  const dispatch = useAppDispatch();
  const handleAddToFavorites = (article: BlogInfo) => {
    dispatch(addToFavorites(article));
  };
  const handleRemoveFromFavorites = (details: BlogInfo) => {
    dispatch(deleteFromFavorites(details));
  };
  const handleChangeFavorites = () => {
    isInFavorites ? handleRemoveFromFavorites(details) : handleAddToFavorites(details);
  };
  return (
    <BlogContentContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
    >
      <Title>{title}</Title>
      <Image src={imageUrl} />
      <Summary>{summary}</Summary>
      <ButtonsContainer>
        <OuterLink href={url}>Learn more</OuterLink>
        {isAuth && (
          <FavoritesButton onClick={handleChangeFavorites}>
            {isInFavorites ? "⭐" : "✰"}
          </FavoritesButton>
        )}
      </ButtonsContainer>
    </BlogContentContainer>
  );
};

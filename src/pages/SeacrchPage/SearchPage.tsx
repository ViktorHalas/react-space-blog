import { useEffect, useState } from "react";
import { SearchPageContainer, Title } from "./styles";
import { getSearch,fetchSearchBlog, useAppDispatch, useAppSelector } from "store";
import { Spinner, BlogList } from "components";

export const SearchPage = () => {
  const {
    searchParams: { searchValue },
  } = useAppSelector(getSearch);
  const dispatch = useAppDispatch();
  const { blog, error, isLoading } = useAppSelector(getSearch);


  useEffect(() => {
    searchValue &&
      dispatch(
        fetchSearchBlog({
          search: searchValue,
        }),
      );
  }, [dispatch, searchValue]);
  return (
    <SearchPageContainer>
      <Title>
      Search results "{searchValue ? searchValue : " "}"
      </Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <BlogList blog={blog} isLoading={isLoading} currentBlog={"articles"} />
      )}
    </SearchPageContainer>
  );
};

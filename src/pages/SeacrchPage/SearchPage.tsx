import { useEffect, useState } from "react";
import { SearchPageContainer, SearchResultsInfo } from "./styles";
import { getSearch,fetchSearchBlog, useAppDispatch, useAppSelector } from "store";
import { Spinner, BlogList } from "components";

export const SearchPage = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const {
    searchParams: { searchValue },
  } = useAppSelector(getSearch);
  const dispatch = useAppDispatch();
  const { blog, error, isLoading } = useAppSelector(getSearch);

  const handleCloseModal = () => {
    setIsActiveModal(true);
  };

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
      <SearchResultsInfo>
        "{searchValue ? searchValue : " "}" search results for Articles
      </SearchResultsInfo>
      {isLoading ? (
        <Spinner />
      ) : (
        <BlogList blog={blog} isLoading={isLoading} currentBlog={"articles"} />
      )}
    </SearchPageContainer>
  );
};

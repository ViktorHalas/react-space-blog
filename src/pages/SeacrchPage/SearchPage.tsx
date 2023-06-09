import { useEffect, useState } from "react";
import { Pagination, SearchPageContainer, StyledList, Title } from "./styles";
import { getSearch, fetchSearchBlog, useAppDispatch, useAppSelector } from "store";
import { Spinner, BlogList, SkeletonLoader } from "components";

export const SearchPage = () => {
  const {
    searchParams: { searchValue },
  } = useAppSelector(getSearch);
  const dispatch = useAppDispatch();
  const { blog, error, isLoading } = useAppSelector(getSearch);
  const [currentLimit, setCurrentLimit] = useState(12);

  const handleLimit = () => {
    setCurrentLimit(currentLimit + 12);
  };

  useEffect(() => {
    searchValue &&
      dispatch(
        fetchSearchBlog({
          search: searchValue,
          limit: currentLimit,
        }),
      );
  }, [dispatch, searchValue, currentLimit]);
  return (
    <SearchPageContainer>
      <Title>Search results "{searchValue ? searchValue : " "}"</Title>
      {isLoading ? (
        <StyledList>
          {[...new Array(12)].map((_, i) => (
            <SkeletonLoader key={i} />
          ))}
        </StyledList>
      ) : (
        <BlogList blog={blog} currentBlog={"articles"} />
      )}
      {!isLoading && blog.length >= currentLimit && (
        <Pagination onClick={handleLimit} type="button">
          Show more
        </Pagination>
      )}
    </SearchPageContainer>
  );
};

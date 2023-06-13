import { BlogList, TabBlog, CustomSelect, SkeletonLoader } from "components";
import React, { useEffect, useState } from "react";
import { getBlog, fetchHomeBlog, useAppDispatch, useAppSelector, setUser } from "store";
import {
  ButtonsContainer,
  HomePageContainer,
  Pagination,
  StyledList,
  TabBlogContainer,
  Title,
} from "./styles";
import { SelectOption, TabsBlogInfo } from "types";
import { SingleValue } from "react-select";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "services";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => onAuthStateChanged(auth, (user) => dispatch(setUser(user))), [dispatch]);
  const tabs: TabsBlogInfo[] = [
    { id: "1", label: "Articles" },
    { id: "2", label: "Blog" },
  ];

  const options: SelectOption[] = [
    { value: "publishedAt:DESC", label: "Date" },
    { value: "title", label: "Title (A-Z)" },
    { value: "title:DESC", label: "Title (Z-A)" },
  ];
  const { blog, isLoading } = useAppSelector(getBlog);
  const [currentBlog, setCurrentBlog] = useState<string>("articles");
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const [option, setOption] = useState(options[0]);
  const [currentLimit, setCurrentLimit] = useState(12);

  const handleLimit = () => {
    setCurrentLimit(currentLimit + 12);
  };

  const handleSelect = (option: SingleValue<SelectOption>) => {
    if (option) {
      setOption(option);
    }
  };

  const handleArticles = () => {
    setCurrentBlog((prevBlog) => (prevBlog = "articles"));
    setSelectedTabId((prevId) => (prevId = "1"));
  };

  const handleBlogs = () => {
    setCurrentBlog((prevBlog) => (prevBlog = "blogs"));
    setSelectedTabId((prevId) => (prevId = "2"));
  };

  useEffect(() => {
    dispatch(fetchHomeBlog({ blogType: currentBlog, sort: option.value, limit: currentLimit }));
  }, [dispatch, currentBlog, option.value, currentLimit]);
  return (
    <HomePageContainer>
      <Title>Blog</Title>
      <ButtonsContainer>
        <TabBlogContainer>
          <TabBlog selectedTabId={selectedTabId} tabs={tabs[0]} onClick={handleArticles} />
          <TabBlog selectedTabId={selectedTabId} tabs={tabs[1]} onClick={handleBlogs} />
        </TabBlogContainer>
        <CustomSelect options={options} onChange={handleSelect} />
      </ButtonsContainer>
      {isLoading ? (
        <StyledList>
          {[...new Array(12)].map((_, i) => (
            <SkeletonLoader key={i} />
          ))}
        </StyledList>
      ) : (
        <BlogList blog={blog} currentBlog={currentBlog} />
      )}
      {!isLoading && blog.length >= currentLimit && (
        <Pagination onClick={handleLimit} type="button">
          Show more
        </Pagination>
      )}
    </HomePageContainer>
  );
};

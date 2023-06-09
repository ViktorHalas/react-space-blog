import { BlogList, TabBlog, SortButtons, CustomSelect, SkeletonLoader } from "components";
import React, { useEffect, useState } from "react";
import { getBlog, fetchHomeBlog, useAppDispatch, useAppSelector } from "store";
import { HomePageContainer, Pagination, StyledList, TabBlogWrapper, Title } from "./styles";
import { DaysInfo, SelectOption, TabsBlogInfo } from "types";
import { SingleValue } from "react-select";

export const HomePage = () => {
  const tabs: TabsBlogInfo[] = [
    { id: "1", label: "Articles" },
    { id: "2", label: "Blog" },
  ];

  const days: DaysInfo[] = [
    { id: "0", label: "All" },
    { id: "1", label: "Day" },
    { id: "2", label: "Week" },
    { id: "3", label: "Month" },
    { id: "4", label: "Year" },
  ];

  const options: SelectOption[] = [
    { value: "publishedAt:DESC", label: "Date" },
    { value: "title", label: "Title (A-Z)" },
    { value: "title:DESC", label: "Title (Z-A)" },
  ];
  const { blog, isLoading } = useAppSelector(getBlog);

  const dispatch = useAppDispatch();

  const [currentBlog, setCurrentBlog] = useState<string>("articles");

  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const [selectedButton, setSelectedButton] = useState(days[0].id);
  const [sortByDaysValue, setSortByDaysValue] = useState(9999);
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

  const handleAllBlogs = () => {
    setSortByDaysValue(9999);
    setSelectedButton((prevId) => (prevId = "0"));
  };
  const handleDayValue = () => {
    setSortByDaysValue(1);
    setSelectedButton((prevId) => (prevId = "1"));
  };
  const handleWeekValue = () => {
    setSortByDaysValue(7);
    setSelectedButton((prevId) => (prevId = "2"));
  };
  const handleMonthValue = () => {
    setSortByDaysValue(30);
    setSelectedButton((prevId) => (prevId = "3"));
  };
  const handleYearValue = () => {
    setSortByDaysValue(365);
    setSelectedButton((prevId) => (prevId = "4"));
  };
  useEffect(() => {
    dispatch(fetchHomeBlog({ blogType: currentBlog, sort: option.value, limit: currentLimit }));
  }, [dispatch, currentBlog, option.value, currentLimit]);
  return (
    <HomePageContainer>
      <Title>Blog</Title>
      <TabBlogWrapper>
        <TabBlog selectedTabId={selectedTabId} tabs={tabs[0]} onClick={handleArticles} />
        <TabBlog selectedTabId={selectedTabId} tabs={tabs[1]} onClick={handleBlogs} />
      </TabBlogWrapper>
      <SortButtons
        days={days}
        handleAllBlogs={handleAllBlogs}
        handleDayValue={handleDayValue}
        handleWeekValue={handleWeekValue}
        handleMonthValue={handleMonthValue}
        handleYearValue={handleYearValue}
        selectedButton={selectedButton}
      />
      <CustomSelect options={options} onChange={handleSelect} />
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

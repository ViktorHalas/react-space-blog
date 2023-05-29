import { BlogCard, Spinner } from "components";
import React from "react";
import { generatePath } from "react-router-dom";
import { ROUTE } from "router";
import { BlogInfo } from "types";
import { BlogListContainer, RouterLink } from "./styles";

interface BlogListProps {
  blog: BlogInfo[];
  isLoading: boolean;
  sortByDaysValue?: number;
  currentBlog: string;
}

export const BlogList = ({ blog, isLoading, sortByDaysValue, currentBlog }: BlogListProps) => {
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <BlogListContainer>
          {blog.map(({ id, title, imageUrl, publishedAt }) => (
            <RouterLink
              key={id}
              to={generatePath(ROUTE.HOME + ROUTE.DETAILS, { blog: currentBlog, id: String(id) })}
            >
              <BlogCard title={title} imageUrl={imageUrl} publishedAt={publishedAt} />
            </RouterLink>
          ))}
        </BlogListContainer>
      )}
    </>
  );
};

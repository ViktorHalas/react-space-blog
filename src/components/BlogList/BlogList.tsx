import { BlogCard } from "components";
import React from "react";
import { generatePath } from "react-router-dom";
import { ROUTE } from "router";
import { BlogInfo } from "types";
import { BlogListContainer, RouterLink } from "./styles";

interface BlogListProps {
  blog: BlogInfo[];
  currentBlog: string;
}

export const BlogList = ({ blog, currentBlog }: BlogListProps) => {
  return (
    <>
      <BlogListContainer>
        {blog.map(({ id, title, imageUrl, publishedAt }) => (
          <RouterLink
            key={id}
            to={generatePath(ROUTE.HOME + ROUTE.DETAILS, {
              blogType: currentBlog,
              id: String(id),
            })}
          >
            <BlogCard title={title} imageUrl={imageUrl} publishedAt={publishedAt} />
          </RouterLink>
        ))}
      </BlogListContainer>
    </>
  );
};

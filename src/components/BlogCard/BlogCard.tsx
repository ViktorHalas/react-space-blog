import React from "react";
import cliTruncate from "cli-truncate";
import { CardContainer, BlogImage, PublishedAt, TextContainer, Title } from "./styles";

interface BlogListProps {
  imageUrl: string;
  title: string;
  publishedAt: string;
}

export const BlogCard = ({ imageUrl, title, publishedAt }: BlogListProps) => {
  const date = new Date(publishedAt).toLocaleDateString();

  return (
    <CardContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
    >
      <BlogImage src={imageUrl}></BlogImage>
      <TextContainer>
        <PublishedAt>{date}</PublishedAt>
        <Title>{cliTruncate(title, 69)}</Title>
      </TextContainer>
    </CardContainer>
  );
};

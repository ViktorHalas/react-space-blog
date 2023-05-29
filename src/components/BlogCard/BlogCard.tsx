import React from "react";
import { CardContainer, BlogImage, PublishedAt, TextContainer, Title } from "./styles";

interface BlogListProps {
  imageUrl: string;
  title: string;
  publishedAt: string;
}

export const BlogCard = ({ imageUrl, title, publishedAt }: BlogListProps) => {
  const date = new Date(publishedAt).toLocaleDateString();
  return (
    <CardContainer>
      <BlogImage src={imageUrl}></BlogImage>
      <TextContainer>
        <PublishedAt>{date}</PublishedAt>
        <Title>{title}</Title>
      </TextContainer>
    </CardContainer>
  );
};

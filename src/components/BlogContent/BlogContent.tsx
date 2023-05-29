import React from "react";
import { BlogInfo } from "types";
import { BlogContentContainer, Title, Image, Summary, OuterLink } from "./styles";

interface BlogContentProps {
  details: BlogInfo;
  isLoading: boolean;
}

export const BlogContent = ({ details, isLoading }: BlogContentProps) => {
  const { imageUrl, title, summary, url } = details;
  return (
    <BlogContentContainer>
      <Title>{title}</Title>
      <Image src={imageUrl} />
      <Summary>{summary}</Summary>
      <OuterLink href={url}>Learn more</OuterLink>
    </BlogContentContainer>
  );
};

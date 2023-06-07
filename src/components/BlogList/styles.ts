import { Link } from "react-router-dom";
import styled from "styled-components";
import { Media } from "ui";


const BlogListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  row-gap: 40px;
  margin: 0 auto;
  ${Media.LG}{
    grid-template-columns: repeat(2, 1fr);
  }
  ${Media.SM}{
    grid-template-columns: 1fr;
  }
`;

const RouterLink = styled(Link)`
  text-decoration: none;
`;

export {BlogListContainer, RouterLink};
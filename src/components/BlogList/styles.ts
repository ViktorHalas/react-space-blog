import { Link } from "react-router-dom";
import styled from "styled-components";


const BlogListContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  row-gap: 40px;
`;

const RouterLink = styled(Link)``;

export {BlogListContainer, RouterLink};
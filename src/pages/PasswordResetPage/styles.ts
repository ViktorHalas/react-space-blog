import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Spaces, Typography } from "ui";

const ResetPageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  ${Spaces.SP1};
`;

const RouterLink = styled.div`
  display: block;
  ${Spaces.SP5};
  color: ${Color.PRIMARY_TEXT};
  text-decoration: none;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover{
    color: ${Color.PRIMARY};
  }`;

const Title = styled.h1`
  ${Spaces.SP1};
  ${Typography.H1};
  color: ${Color.PRIMARY_TEXT};
`;

export {RouterLink, Title, ResetPageContainer};
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Typography } from "ui";

const StyledInitials = styled.div`
  min-width: 48px;
  min-height: 48px;
  padding: 7px;
  ${Typography.B1};
  text-align: center;
  color: ${Color.WHITE};
  background: linear-gradient(133.87deg, #4d0ac7 -10.18%, #912ef2 108.59%);
  border-radius: 4px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap:10px;
  align-items: center;
`;

const RouterLink = styled(Link)`
  ${Typography.B1};
  text-decoration: none;
  color:${Color.PRIMARY_TEXT};
  transition: 0.3s ease;
  :hover{
    color:${Color.PRIMARY_LIGHT};
  }
  :active{
    color:${Color.PRIMARY_LIGHT}
  }
`;


export{StyledInitials, UserInfo, RouterLink};
import styled from "styled-components";
import { Color, Media, Typography } from "ui";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 33px;
  border-top:1px solid ${Color.GREY} ;
  ${Media.SM}{
    padding: 33px 24px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  ${Media.XL}{
      padding: 33px 40px;
  };
`;

const Copyright = styled.div`
  ${Typography.B1};
  color:${Color.BLACK_MEDIUM};
`;

const Label = styled.span`
  margin-right: 20px;
  ${Typography.B1};
  color: ${Color.BLACK_MEDIUM};
`;

const SwitcherContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export{StyledFooter, Copyright, Label, SwitcherContainer};
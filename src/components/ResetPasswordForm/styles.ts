import styled from "styled-components";
import { Color, Spaces, Typography } from "ui";

const Button = styled.button`
  padding: 13px;
  ${Spaces.SP6};
  width: 100%;
  ${Typography.B1};
  color: ${Color.WHITE};
  background-color: ${Color.PRIMARY};
  border: none;
  border-radius: 4px;
  transition: 0.3s ease;
  cursor: pointer;
  &:hover{
    background-color: ${Color.PRIMARY_LIGHT};
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${Typography.B2};
  color: ${Color.PRIMARY_TEXT};
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    max-width: 624px;
    padding: 40px;
    background-color: ${Color.SECONDARY_BG};
    border-radius: 16px;
`;

const Input = styled.input`
  ${Spaces.SP3};
  padding: 18px 20px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid;
  border-color: ${Color.GREY};
  html[theme="dark"] & {
    border: 1px solid transparent;
  }
`;
export {Button, Label, Form, Input};
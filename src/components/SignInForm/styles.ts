import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Spaces, Typography } from "ui";

const Button = styled.button`
  width: 100%;
  padding: 13px;
  ${Spaces.SP6};
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

const RouterLink = styled(Link)`
  text-decoration: none;
  color:${Color.PRIMARY};
  transition: 0.3s ease;
  &:hover{
    color:${Color.PRIMARY_LIGHT};
  }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 624px;
    padding: 40px;
    margin: 0 auto;
    background-color: ${Color.SECONDARY_BG};
    border-radius: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 18px 20px;
  border-radius: 4px;
  border: 1px solid;
  border-color: ${Color.GREY};
  html[theme="dark"] & {
    border: 1px solid transparent;
  }
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  row-gap: 30px;
  ${Spaces.SP8};
`;

const Text = styled.span`
  width: 100%;
  ${Typography.B1};
  color:${Color.PRIMARY_TEXT};
  text-align: center;
`;

const ResetPassword = styled(Link)`
  ${Spaces.SP3};
  ${Typography.B1};
  text-decoration: none;
  color: ${Color.PRIMARY_TEXT};
  transition: 0.3s ease;
  &:hover{
    color: ${Color.PRIMARY};
  }
`;
const ErrorMessage = styled.p`
  ${Typography.B2};
  color: red;
`;
export {Button, Label, RouterLink, Form, Input, InputGroup, Text, ResetPassword, ErrorMessage};
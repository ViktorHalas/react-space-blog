import styled from "styled-components";
import { Color } from "ui";

const StyledForm = styled.form`
  justify-self: center;
  height: 100%;
  width: 100%;
`;

const InputWrapper = styled.div`
  height: 100%;
`;

const StyledInput = styled.input`
  align-self: center;
  width: 100%;
  height: 100%;
  padding: 0 32px;
  font-size: 16px;
  color: ${Color.PRIMARY_TEXT};
  background-color: ${Color.SECONDARY_BG};
  border-radius: 8px;
`;

const SubmitButton = styled.button`
  visibility: hidden;
`;
const SearchIcon = styled.div`
width: 200px;
height: 30px;
background-color: red;
`;
export { StyledForm, StyledInput, InputWrapper, SubmitButton,SearchIcon };
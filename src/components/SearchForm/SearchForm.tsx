import { useDebounce, useInput, useOnClickOutside } from "hooks";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { InputWrapper, StyledForm, StyledInput, SubmitButton } from "./styles";
import { useAppDispatch } from "store";
import { setSearchValue } from "store";
import { SearchIcon } from "assets";

interface SearchFormProps {
  onClick?: () => void;
}

export const SearchForm = ({ onClick }: SearchFormProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInputActive, setIsInputActive] = useState(false);
  useOnClickOutside(ref, () => setIsInputActive(false));
  const handleHide = () => {
    setIsInputActive(true);
  };

  const searchValue = useInput();
  const navigate = useNavigate();
  const debouncedValue = useDebounce(searchValue.value, 1000);
  const dispatch = useAppDispatch();
  const { reset } = useForm();

  const handleSearch = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    navigate(ROUTE.SEARCH);
    reset();
  };

  useEffect(() => {
    dispatch(
      setSearchValue({
        searchValue: debouncedValue,
      }),
    );
  }, [debouncedValue, dispatch]);

  return (
    <>
      {isInputActive ? (
        <StyledForm onSubmit={handleSearch}>
          <InputWrapper ref={ref}>
            <StyledInput type="search" placeholder="Search ..." name="search" {...searchValue} />
            <SubmitButton type="submit" onClick={onClick}></SubmitButton>
          </InputWrapper>
        </StyledForm>
      ) : (
        <SearchIcon onClick={handleHide} height={"38px"}></SearchIcon>
      )}
    </>
  );
};

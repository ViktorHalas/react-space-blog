import { SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "router";
import { fetchSignInUser, getUserInfo, useAppDispatch, useAppSelector } from "store";
import {
  Button,
  Label,
  RouterLink,
  Form,
  Input,
  InputGroup,
  Text,
  ResetPassword,
  ErrorMessage,
} from "./styles";
import { useState } from "react";
import { Modal } from "components";
import { useNavigate } from "react-router-dom";

interface LoginData {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const { error } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const handleCloseModal = () => {
    setIsActive(false);
  };
  const handleNavigate = () => {
    navigate(ROUTE.HOME);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginData>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<LoginData> = ({ email, password }) => {
    dispatch(fetchSignInUser({ email, password }))
      .unwrap()
      .then((response) => {
        reset();
      })
      .then(() => {
        setIsActive(true);
      });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <Label>
          Email
          <Input
            placeholder="Enter email"
            type="email"
            {...register("email", { required: "Email is requared" })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </Label>
        <Label>
          Password
          <Input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 7, message: "Minimum characters 7" },
            })}
          />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </Label>
      </InputGroup>
      <ResetPassword to={`${ROUTE.HOME + ROUTE.RESET_PASSWORD}`}>Forgot password?</ResetPassword>
      <Button type="submit">Sign in</Button>
      <Text>
        Don’t have an account?
        <RouterLink to={`${ROUTE.HOME + ROUTE.SIGN_UP}`}> Sign Up</RouterLink>
      </Text>
      {isActive && !error && <Modal message="Successful" handleClick={handleNavigate} />}
      {isActive && error && <Modal message={error} handleClick={handleCloseModal} />}
    </Form>
  );
};

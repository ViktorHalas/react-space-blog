import { SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "router";
import { fetchSignInUser, useAppDispatch } from "store";
import { Button, Label, RouterLink, Form, Input, InputGroup, Text, ResetPassword } from "./styles";

interface LoginData {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<LoginData>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<LoginData> = ({ email, password }) => {
    dispatch(fetchSignInUser({ email, password }))
      .unwrap()
      .then((response) => {
        reset();
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
            {...register("email", { required: true })}
          />
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
        </Label>
      </InputGroup>
      <ResetPassword to={`${ROUTE.HOME + ROUTE.RESET_PASSWORD}`}>Forgot password?</ResetPassword>
      <Button type="submit">Sign in</Button>
      <Text>
        Don’t have an account?
        <RouterLink to={`${ROUTE.HOME + ROUTE.SIGN_UP}`}> Sign Up</RouterLink>
      </Text>
    </Form>
  );
};

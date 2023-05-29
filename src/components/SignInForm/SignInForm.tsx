import { SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "router";
import { fetchSignInUser, useAppDispatch } from "store";
import { Button, Label, RouterLink, Form, Input, InputGroup, Text } from "./styles";

interface LoginData {
  email: string;
  password: string;
}

export const SignUpForm = () => {
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
      <Button type="submit">Sign up</Button>
      <Text>
        Don’t have an account?
        <RouterLink to={`${ROUTE.HOME + ROUTE.SING_UP}`}>Sign Up</RouterLink>
      </Text>
    </Form>
  );
};

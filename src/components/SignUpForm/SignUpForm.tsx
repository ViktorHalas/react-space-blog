import { SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "router";
import { fetchSignUpUser, useAppDispatch } from "store";
import { Button, Label, RouterLink, Form, Input, InputGroup, Text } from "./styles";

interface RegistrationData {
  userName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const SignUpForm = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<RegistrationData>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<RegistrationData> = ({
    userName,
    email,
    password,
    passwordConfirm,
  }) => {
    if (password === passwordConfirm) {
      dispatch(fetchSignUpUser({ userName, email, password }))
        .unwrap()
        .then((response) => {
          reset();
        });
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <Label>
          Fullname
          <Input
            placeholder="Your Fullname"
            type="text"
            {...register("userName", { required: true, pattern: /^[A-Z][a-z]+ [A-Z][a-z]+$/ })}
          />
        </Label>
        <Label>
          Email
          <Input placeholder="Your Email" type="email" {...register("email", { required: true })} />
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
        <Label>
          "Confirm Password"
          <Input
            placeholder="Confirm password"
            type="password"
            {...register("passwordConfirm", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum characters 6" },
            })}
          />
        </Label>
      </InputGroup>
      <Button type="submit">Sign up</Button>
      <Text>
        Already have an account?{" "}
        <RouterLink to={`${ROUTE.HOME + ROUTE.SING_IN}`}>Sign In</RouterLink>
      </Text>
    </Form>
  );
};

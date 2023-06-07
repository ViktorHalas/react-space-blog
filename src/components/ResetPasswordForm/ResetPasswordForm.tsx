import { SubmitHandler, useForm } from "react-hook-form";
import { fetchResetPassword, useAppDispatch } from "store";
import { Button, Label, Form, Input } from "./styles";

interface ResetPasswordData {
  email: string;
}

export const ResetPasswordForm = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<ResetPasswordData>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<ResetPasswordData> = ({ email }) =>
    dispatch(fetchResetPassword({ email }));

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Email
        <Input placeholder="Your email" type="email" {...register("email", { required: true })} />
      </Label>
      <Button type="submit">Send code</Button>
    </Form>
  );
};

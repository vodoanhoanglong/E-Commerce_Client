import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { IconButton, InputAdornment, Stack } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { FormProvider, RHFTextField } from "~/components/hookform";
import Iconify from "~/components/Iconify";
import useAuthentication from "~/hooks/useAuthentication";
import { RegisterFormInput } from "~/models";

const RegisterSchema = Yup.object({
  firstName: Yup.string().required("First name required"),
  lastName: Yup.string().required("Last name required"),
  email: Yup.string().email("Email must be a valid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
  repassword: Yup.string()
    .required("Repassword is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  repassword: "",
};

export default function RegisterForm() {
  const { loading, handleRegister } = useAuthentication();
  const methods = useForm<RegisterFormInput>({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(handleRegister)}>
      <Stack spacing={3}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <RHFTextField name="firstName" label="First name" />
          <RHFTextField name="lastName" label="Last name" />
        </Stack>

        <RHFTextField name="email" label="Email address" type="text" />

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  <Iconify icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <RHFTextField
          name="repassword"
          label="Confirm Password"
          type={showConfirm ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowConfirm(!showConfirm)}>
                  <Iconify icon={showConfirm ? "eva:eye-fill" : "eva:eye-off-fill"} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting || loading}>
          Register
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}

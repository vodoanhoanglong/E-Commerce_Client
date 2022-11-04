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
  firstName: Yup.string().required("Họ không được để trống!"),
  lastName: Yup.string().required("Tên không được để trống!"),
  email: Yup.string().email("Địa chỉ email không hợp lệ").required("Địa chỉ email không được để trống!"),
  password: Yup.string().required("Mật khẩu không được để trống!"),
  repassword: Yup.string()
    .required("Mật khẩu không được để trống!")
    .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp!"),
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
          <RHFTextField name="firstName" label="Họ" />
          <RHFTextField name="lastName" label="Tên" />
        </Stack>

        <RHFTextField name="email" label="Địa chỉ Email" type="text" />

        <RHFTextField
          name="password"
          label="Mật Khẩu"
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
          label="Xác nhận mật khẩu"
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
          ĐĂNG KÝ
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}

import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { FormControlLabel, Grid, IconButton, InputAdornment, Radio, Stack } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { FormProvider, RHFDatePicker, RHFPhoneInput, RHFRadioButton, RHFTextField } from "~/components/hookform";
import Iconify from "~/components/Iconify";
import useAuthentication from "~/hooks/useAuthentication";
import { RegisterForm } from "~/models";

const RegisterSchema = Yup.object({
  fullName: Yup.string().required("Họ không được để trống!"),
  email: Yup.string().email("Địa chỉ email không hợp lệ").required("Địa chỉ email không được để trống!"),
  dob: Yup.date().required("Ngày sinh không được để trống!"),
  phone: Yup.string().required("Số điện thoại không được để trống!"),
  gender: Yup.string().required(),
  address: Yup.string().required("Địa chỉ không được để trống!"),
  password: Yup.string().required("Mật khẩu không được để trống!"),
});

const defaultValues = {
  fullName: "",
  email: "",
  dob: new Date(),
  phone: "",
  gender: "",
  address: "",
  password: "",
};

export default function SignUpForm() {
  const { loading, handleRegister } = useAuthentication();
  const methods = useForm<RegisterForm>({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(handleRegister)}>
      <Grid container spacing={2} marginBottom={3}>
        <Grid item xs={12}>
          <Stack spacing={3}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={9}>
                <RHFTextField name="fullName" label="Họ và Tên" />
              </Grid>
              <Grid item xs={12} md={3}>
                <RHFRadioButton name="gender" label="Giới Tính">
                  <FormControlLabel control={<Radio size="small" />} label="Nam" value="Nam" />
                  <FormControlLabel control={<Radio size="small" />} label="Nữ" value="Nữ" />
                </RHFRadioButton>
              </Grid>
            </Grid>
            <RHFTextField name="address" label="Địa chỉ" />
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <RHFPhoneInput name="phone" label="Số điện thoại" />
              <RHFDatePicker name="dob" label="Ngày Sinh" />
            </Stack>
            <RHFTextField name="email" label="Email" type="text" />
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
          </Stack>
        </Grid>
      </Grid>
      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting || loading}>
        ĐĂNG KÝ
      </LoadingButton>
    </FormProvider>
  );
}

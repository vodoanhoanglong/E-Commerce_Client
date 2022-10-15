import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { IconButton, InputAdornment, Link, Stack } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Iconify } from '~/components';
import { FormProvider, RHFCheckbox, RHFTextField } from '~/components/hookform';

interface ILoginForm {
  email: string;
  password: string;
  remember?: boolean;
}

const defaultValues = {
  email: '',
  password: '',
  remember: true,
};
const LoginSchema = Yup.object({
  email: Yup.string().email('Email must be a valid email address!').required('Email is required!'),
  password: Yup.string().required('Password is required!'),
});

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const methods = useForm<ILoginForm>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (value: ILoginForm) => {
    // TODO: Call Login API
    console.log(value);
    navigate('/', { replace: true });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="email" label="Email address" />

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <RHFCheckbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover" sx={{ cursor: 'pointer' }}>
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        SIGN IN
      </LoadingButton>
    </FormProvider>
  );
}

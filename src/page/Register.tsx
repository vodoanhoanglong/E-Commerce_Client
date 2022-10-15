import { Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Page } from '~/components';
import { AuthSocial, RegisterForm } from '~/modules/auth';
export default function Register() {
  return (
    <Page title="Register">
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: 'center',
        }}
      >
        Get started absolutely free.
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 5, textAlign: 'center' }}>
        Free forever. No credit card needed.
      </Typography>
      <AuthSocial />
      <RegisterForm />
      <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
        Already have an account?&nbsp;
        <Link variant="subtitle2" to="/login" component={RouterLink}>
          Login
        </Link>
      </Typography>
    </Page>
  );
}

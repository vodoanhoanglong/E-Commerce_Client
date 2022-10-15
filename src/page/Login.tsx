import { Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Page } from '~/components';
import { AuthSocial, LoginForm } from '~/modules/auth';

function Login() {
  return (
    <Page title="Sign In">
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: 'center',
        }}
      >
        Sign in to tiki fake shop
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 5, textAlign: 'center' }}>
        Enter your details below.
      </Typography>
      <AuthSocial />
      <LoginForm />
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Don’t have an account?{' '}
        <Link variant="subtitle2" component={RouterLink} to="/register">
          Get started
        </Link>
      </Typography>
    </Page>
  );
}

export default Login;

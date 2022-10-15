import styled from '@emotion/styled';
import { Container } from '@mui/material';
import { Outlet } from 'react-router';

const ContentStyle = styled('div')(({ theme }: any) => ({
  maxWidth: 600,
  margin: '0 auto',
  minHeight: '100vh',
  padding: theme.spacing(12, 0),
}));

function AuthLayout() {
  return (
    <Container maxWidth="sm">
      <ContentStyle>
        <Outlet />
      </ContentStyle>
    </Container>
  );
}

export default AuthLayout;

import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { NavBar } from './components';

const APP_BAR_HEIGHT = 64;

const RootStyle = styled('div')({
  minHeight: '100%',
  overflow: 'hidden',
});

const MainStyle = styled('div')(({ theme }) => ({
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_HEIGHT + 16,
  paddingBottom: theme.spacing(10),
}));

function MainLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    // Handle check Logged
    navigate('/home', { replace: true });
  }, [navigate]);

  return (
    <RootStyle>
      <NavBar />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}

export default MainLayout;

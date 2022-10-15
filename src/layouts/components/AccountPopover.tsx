import { Avatar, Box, Divider, IconButton, MenuItem, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Fragment, useRef, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import MenuPopover from '~/components/MenuPopover';

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
    linkTo: '/',
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
    linkTo: '#',
  },
];

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
    navigate('/login');
  };

  return (
    <Fragment>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(Boolean(open) && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src="/static/utc2icon.png" alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {'Nguyễn Thanh Hòa'}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {'email@gmail.com'}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem
              key={option.label}
              to={option.linkTo}
              component={RouterLink}
              onClick={handleClose}
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleClose} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </MenuPopover>
    </Fragment>
  );
}

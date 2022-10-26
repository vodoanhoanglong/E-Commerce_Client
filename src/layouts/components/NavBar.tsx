import { AppBar, Box, Stack, Toolbar } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

import AccountPopover from "./AccountPopover";
import NavigationLink from "./NavigationLink";
import NotificationsPopover from "./NotificationsPopover";

const APPBAR_HEIGHT = 64;
const RootStyle = styled(AppBar)(({ theme }: any) => ({
  boxShadow: theme.customShadows.z8,
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
}));

const ToolbarStyle = styled(Toolbar)(() => ({
  minHeight: APPBAR_HEIGHT,
}));

export default function Navbar() {
  return (
    <RootStyle>
      <ToolbarStyle>
        <NavigationLink />
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}

import { AppBar, Toolbar } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

interface NavBarProps {
  children: React.ReactNode;
}

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

export default function Navbar({ children }: NavBarProps) {
  return (
    <RootStyle>
      <ToolbarStyle>{children}</ToolbarStyle>
    </RootStyle>
  );
}

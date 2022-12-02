import { Box, styled, SxProps, Theme } from "@mui/material";

interface PaperWrapperProps {
  sx?: SxProps<Theme>;
  children: any;
}

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.customShadows.z8,
}));
function PaperWrapper({ children, sx }: PaperWrapperProps) {
  return <Wrapper sx={{ marginBottom: 2, ...sx }}>{children}</Wrapper>;
}

export default PaperWrapper;

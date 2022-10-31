import { alpha, styled, SxProps, Theme } from "@mui/material/styles";
import SimpleBarReact from "simplebar-react";

interface ScrollbarProps {
  children: React.ReactNode;
  sx?: SxProps<Theme> | undefined;
}

const RootStyle = styled("div")(() => ({
  flexGrow: 1,
  height: "100%",
  userSelect: "none",
  overflow: "hidden overlay",
}));

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: "100%",
  "& .simplebar-scrollbar": {
    "&:before": {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    "&.simplebar-visible:before": {
      opacity: 1,
    },
  },
  "& .simplebar-track.simplebar-vertical": {
    width: 10,
  },
  "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
    height: 6,
  },
  "& .simplebar-mask": {
    zIndex: "inherit",
  },
  "& .simplebar-placeholder": {
    height: "2.5rem !important",
  },
}));

export default function Scrollbar({ children, sx, ...other }: ScrollbarProps) {
  return (
    <RootStyle>
      <SimpleBarStyle timeout={500} clickOnTrack={false} sx={sx} {...other}>
        {children}
      </SimpleBarStyle>
    </RootStyle>
  );
}

import { Box, styled, SxProps, Theme } from "@mui/material";

interface TagProps {
  title: string;
  sx?: SxProps<Theme>;
}

const TagWrapper = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  whiteSpace: "nowrap",
  minWidth: "22px",
  height: "24px",
  padding: "0 8px",
  borderRadius: theme.shape.borderRadius,
  background: theme.palette.primary.lighter,
  color: theme.palette.primary.main,
  fontSize: "12px",
  fontWeight: 700,
  lineHeight: 0,
  textTransform: "capitalize",
}));

const Tag = ({ title, sx }: TagProps) => <TagWrapper sx={sx}>{title}</TagWrapper>;

export default Tag;

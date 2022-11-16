import { Box, styled } from "@mui/material";

export const ProductBox = styled(Box)(({ theme }) => ({
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  maxWidth: 300,
  backgroundColor: "#fff",
  margin: theme.spacing(0, 2, 0, 2),
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(2, 0, 2, 0),
  },
}));

export const ContainerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxHeight: "320",
  margin: theme.spacing(0, 2, 0, 2),
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(2, 0, 2, 0),
  },
}));

export const InfoBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ImgContainer = styled(Box)(() => ({
  width: "100%",
}));

export const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0",
  justifyContent: "center",
  gap: theme.spacing(5),
  marginLeft: theme.spacing(8),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

import { Box, styled } from "@mui/material";

export const ProductBox = styled(Box)(({ theme }) => ({
  maxHeight: "600px",
  maxWidth: 300,
  backgroundColor: "#fff",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[10],
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

export const ProfileBoxCart = styled(Box)(() => ({
  display: "flex",
}));

export const ImgContainer = styled(Box)(() => ({
  width: "100%",
  minHeight: "200px",
  maxHeight: "450px",
  p: 1,
}));

export const ContainerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(25),
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
}));

export const CustomBox = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("md")]: {
    width: "85%",
  },
}));

export const Dislay = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[10],
}));

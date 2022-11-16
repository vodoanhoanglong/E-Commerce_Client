import { Box, styled } from "@mui/material";

const HomeProducts = () => {
  const ProductBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    maxWidth: 300,
    backgroundColor: "#fff",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  const ContainerBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  const InfoBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  const ImgContainer = styled(Box)(() => ({
    width: "100%",
  }));
};

export default HomeProducts;

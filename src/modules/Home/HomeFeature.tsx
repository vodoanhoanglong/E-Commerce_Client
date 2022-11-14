import { Box, Container, styled, Typography } from "@mui/material";
import HomeProducts from "../Home/HomeProducts";

const HomeFeature = () => {
  const FetureBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const FetureTextBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  return (
    <Box sx={{ mt: 5, backgroundColor: "#f5fafe", py: 10 }}>
      <Container>
        <FetureTextBox>
          <Typography sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}>Feature Product</Typography>
        </FetureTextBox>

        <FetureBox>
          <HomeProducts />
        </FetureBox>
      </Container>
    </Box>
  );
};

export default HomeFeature;

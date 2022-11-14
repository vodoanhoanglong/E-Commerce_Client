import { Box, styled, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const HomeMain = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    margin: "0",
    justifyContent: "center",
    gap: theme.spacing(10),
    marginLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 2, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "90vh" }}>
      <CustomBox>
        <Box sx={{ flex: "1.25" }}>
          <Typography variant="body2" sx={{ fontSize: "18px", color: "#687690", fontWeight: "500", mt: 10, mb: 4 }}>
            Welcome to The Shopping Mall
          </Typography>
          <Title variant="h1">Discover a place where you'll love to live.</Title>
          <Typography variant="body2" sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}>
            Be the first to get the best real estate deals before they hit the mass market! Hot foreclosure deals with
            one simple search!
          </Typography>

          <Button variant="contained" sx={{ width: "150px", borderRadius: "none", height: "50px" }}>
            More Of Shop
          </Button>
        </Box>
        <Box sx={{ flex: "1.6", mt: 7 }}>
          <img
            src="https://simpleshop.vn/blog/wp-content/uploads/2021/07/TND_M119_05-removebg-preview-1.png"
            alt="homemainImg"
            style={{ maxWidth: "100%", marginBottom: "2rem" }}
          />
        </Box>
      </CustomBox>
    </Box>
  );
};

export default HomeMain;

import { Box, Typography } from "@mui/material";
import HomeProducts from "../Home/HomeProducts";

const HomeFeature = () => {
  return (
    <Box sx={{ py: 10 }}>
      <div style={{ width: "6%", height: "5px", backgroundColor: "#2065D1", margin: "20px auto" }}></div>
      <Typography variant="h3" textAlign="center">
        Sản phẩm nổi bật
      </Typography>
      <HomeProducts />
    </Box>
  );
};

export default HomeFeature;

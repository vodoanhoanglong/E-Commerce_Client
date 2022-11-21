import { Box, Grid, Typography } from "@mui/material";
import { homeProducts } from "./data";
import HomeProductCard from "./HomeProductCard";

const HomeProducts = () => {
  return (
    <Box sx={{ py: 10 }}>
      <div style={{ width: "6%", height: "5px", backgroundColor: "#2065D1", margin: "20px auto" }}></div>
      <Typography variant="h3" textAlign="center">
        Sản phẩm nổi bật
      </Typography>
      <Box sx={{ mt: 5 }}>
        <Grid container gap={5} justifyContent="center">
          {homeProducts.map((item) => (
            <Grid key={item.id} item>
              <HomeProductCard product={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomeProducts;

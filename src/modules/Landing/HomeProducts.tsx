import { useQuery } from "@apollo/client";
import { Box, Grid, Typography } from "@mui/material";
import { GET_PRODUCT_CATEGORY } from "~/graphql/queries";
import { Product } from "~/models";
import HomeProductCard from "./HomeProductCard";

interface ProductData {
  data: Product[];
  pagination: {
    totalElements: number;
    currentPage: number;
    totalPages: number;
    perPage: number;
  };
}

const HomeProducts = () => {
  const { loading, error, data } = useQuery<{ getProducts: ProductData }>(GET_PRODUCT_CATEGORY);
  return (
    <Box sx={{ py: 10 }}>
      <div style={{ width: "6%", height: "5px", backgroundColor: "#2065D1", margin: "20px auto" }}></div>
      <Typography variant="h3" textAlign="center">
        Sản phẩm nổi bật
      </Typography>
      <Box sx={{ mt: 5 }}>
        <Grid container gap={5} justifyContent="center">
          {data?.getProducts.data.map((item) => (
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

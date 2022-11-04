import { Box } from "@mui/material";
import { Page } from "~/components";
import ProductFilter from "~/modules/Products/ProductFilter";

function Product() {
  return (
    <Page title="Sản phẩm">
      <Box
        sx={{
          padding: "0 24px ",
        }}
      >
        <ProductFilter />
      </Box>
    </Page>
  );
}

export default Product;

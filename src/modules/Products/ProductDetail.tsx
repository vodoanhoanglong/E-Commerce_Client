import { Box } from "@mui/material";
import { useLocation } from "react-router";
import { Page } from "~/components";

function ProductDetail() {
  const location = useLocation();
  const data = location.state;

  return (
    <Page title="Thông tin sản phẩm">
      <Box
        sx={{
          padding: "0 24px ",
        }}
      >
        ákm
      </Box>
    </Page>
  );
}

export default ProductDetail;

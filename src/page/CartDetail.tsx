import { Box } from "@mui/material";
import { Page } from "~/components";
import CartProductDetail from "~/modules/cart/CartProductDetail";
import CartProfile from "~/modules/cart/CartProfile";

function CartDetail() {
  return (
    <Page title="Trang Chủ">
      <Box sx={{ backgroundColor: "#ffffff", display: "flex" }}>
        <CartProductDetail />
        <CartProfile />
      </Box>
    </Page>
  );
}

export default CartDetail;

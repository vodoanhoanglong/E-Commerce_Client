import { Box, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Page } from "~/components";
import Cart from "~/modules/cart/Cart";

import CartProfile from "~/modules/cart/CartProfile";

function CartDetail() {
  return (
    <Page title="Giỏ Hàng">
      <Paper>
        <Box>
          <Stack direction="row">
            <Cart />
            <CartProfile />
          </Stack>
        </Box>
      </Paper>
    </Page>
  );
}

export default CartDetail;

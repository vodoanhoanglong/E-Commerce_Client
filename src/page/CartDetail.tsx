import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Page } from "~/components";
import Cart from "~/modules/cart/Cart";

function CartDetail() {
  return (
    <Page title="Giỏ Hàng">
      <Paper>
        <Box>
          <Cart />
        </Box>
      </Paper>
    </Page>
  );
}

export default CartDetail;

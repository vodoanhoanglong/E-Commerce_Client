import { CardHeader, Grid, Stack, Typography } from "@mui/material";
import { PaperWrapper } from "~/components";
import { CartTable } from "~/modules/cart";
import { useAppSelector } from "~/redux/hooks";
import { CartEmpty } from "../cart/components";

function CartPreview() {
  const checkoutData = useAppSelector((state) => state.checkout);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <PaperWrapper>
          <CardHeader
            title={
              <Typography variant="h6">
                Giỏ hàng&nbsp;
                <Typography
                  variant="body2"
                  fontWeight={500}
                  component="span"
                  color="grey.600"
                >{`( ${checkoutData.totalItems} Sản phẩm )`}</Typography>
              </Typography>
            }
            sx={{
              marginBottom: "20px",
            }}
          />

          {checkoutData.totalItems > 0 ? <CartTable cart={checkoutData.cart} /> : <CartEmpty />}
        </PaperWrapper>
      </Grid>
      {/* Order Summary */}
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <h1>Thông tin thanh toán</h1>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default CartPreview;

import { Button, Grid, Stack } from "@mui/material";
import { Iconify } from "~/components";
import { backStep } from "~/redux/features/checkoutSlice";
import { useAppDispatch } from "~/redux/hooks";
import { BilledAddress, OrderSummary } from "./components";

function Payment() {
  const dispatch = useAppDispatch();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <h1>Thanh Toán</h1>
        <Button variant="text" color="inherit" onClick={() => dispatch(backStep())}>
          <Iconify icon="ic:outline-keyboard-arrow-left" sx={{ fontSize: 20 }} />
          Trở về
        </Button>
      </Grid>
      {/* Order Summary */}
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <BilledAddress />
          <OrderSummary />
          <Button size="large" variant="contained" fullWidth>
            Mua Hàng
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Payment;

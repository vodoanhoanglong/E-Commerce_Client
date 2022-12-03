import { Button, Grid, Stack } from "@mui/material";
import { Iconify } from "~/components";
import { backStep, nextStep } from "~/redux/features/checkoutSlice";
import { useAppDispatch } from "~/redux/hooks";
import { DefaultAddress, OrderSummary } from "./components";

function CreateBill() {
  const dispatch = useAppDispatch();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <DefaultAddress />
        <Button variant="text" color="inherit" onClick={() => dispatch(backStep())}>
          <Iconify icon="ic:outline-keyboard-arrow-left" sx={{ fontSize: 20 }} />
          Trở về
        </Button>
      </Grid>
      {/* Order Summary */}
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <OrderSummary />
          <Button size="large" variant="contained" fullWidth onClick={() => dispatch(nextStep())}>
            Thanh Toán
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default CreateBill;

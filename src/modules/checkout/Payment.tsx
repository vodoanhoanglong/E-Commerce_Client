import { Grid, Stack } from "@mui/material";
import { BilledAddress } from "./components";

function Payment() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <h1>Thanh Toán</h1>
      </Grid>
      {/* Order Summary */}
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <BilledAddress />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Payment;

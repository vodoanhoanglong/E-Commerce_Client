import { Grid, Stack } from "@mui/material";
import { MainAddress } from "./components";

function CreateBill() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <MainAddress />
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

export default CreateBill;

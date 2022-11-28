import { Grid } from "@mui/material";
import { useEffect } from "react";
import { Page } from "~/components";
import { CheckoutStepper, MainAddress } from "~/modules/checkout";
import { getCart } from "~/redux/features/checkoutSlice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";

function Checkout() {
  const checkoutState = useAppSelector((state) => state.checkout);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <Page title="Thanh Toán">
      {/* Header */}
      <Grid container sx={{ mb: 5 }}>
        <Grid item xs={12} md={8}>
          <CheckoutStepper activeStep={checkoutState.activeStep} />
        </Grid>
      </Grid>
      {/* Container */}
      <Grid container spacing={3}>
        {/* Cart Bill Payment */}
        <Grid item xs={12} md={8}>
          <MainAddress />
          {/* <Paper elevation={1}>
            <CardHeader
              title={<Typography variant="h6">{"Cart (2 items)"}</Typography>}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "24px 24px 0",
                marginBottom: "24px",
              }}
            />
          </Paper> */}
        </Grid>
        {/* Order Summary */}
        <Grid item xs={12} md={4}>
          <h1>Thông tin thanh toán</h1>
        </Grid>
      </Grid>
    </Page>
  );
}

export default Checkout;

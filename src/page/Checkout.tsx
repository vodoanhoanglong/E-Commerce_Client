import { Grid } from "@mui/material";
import { useEffect } from "react";
import { Page } from "~/components";
import { CartPreview, CreateBill, Payment } from "~/modules/checkout";
import { CheckoutStepper } from "~/modules/checkout/components";
import { getCart } from "~/redux/features/checkoutSlice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";

const container = [
  {
    step: 0,
    element: <CartPreview />,
  },
  {
    step: 1,
    element: <CreateBill />,
  },
  {
    step: 2,
    element: <Payment />,
  },
];

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
      {container[checkoutState.activeStep].element}
    </Page>
  );
}

export default Checkout;

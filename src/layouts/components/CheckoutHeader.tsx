import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import { CheckoutStepper } from "~/modules/cart";

export default function CheckoutHeader() {
  return (
    <Fragment>
      <Box>
        <Typography variant="h4">Thanh Toán</Typography>
      </Box>
      <CheckoutStepper />
    </Fragment>
  );
}

import { useMutation } from "@apollo/client";
import { Box, Button, Grid, Stack } from "@mui/material";
import { Iconify } from "~/components";
import { invoiceMutation } from "~/graphql/mutations";
import { CartItem } from "~/models";
import { backStep } from "~/redux/features/checkoutSlice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { BilledAddress, DeliveryMethods, OrderSummary, PaymentMethods } from "./components";
function Payment() {
  const dispatch = useAppDispatch();
  const checkoutData = useAppSelector((state) => state.checkout);

  const [pay] = useMutation<{ createOrder: string }>(invoiceMutation.CREATE_BILLING);

  const handlePay = () => {
    const productIDs = checkoutData.cart.map((item: CartItem) => item.product.id);
    pay({
      variables: {
        input: {
          products: productIDs,
          deliveryMethod: checkoutData.deliveryMethod?.id,
          paymentMethod: checkoutData.paymentMethod?.id,
        },
      },
      onCompleted: ({ createOrder }) => {
        console.log(createOrder);
      },
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Box>
          <DeliveryMethods />
          <PaymentMethods />
        </Box>
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
          <Button size="large" variant="contained" fullWidth onClick={handlePay}>
            Mua Hàng
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Payment;

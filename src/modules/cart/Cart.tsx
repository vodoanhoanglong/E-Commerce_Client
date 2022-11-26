import { Box, IconButton, styled, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/system";
import { Fragment, useMemo } from "react";
import { Link } from "react-router-dom";
import { Iconify, Scrollbar } from "~/components";
import { useAppSelector } from "~/redux/hooks";
import { publicRoutes } from "~/routes";
import CartHead from "./CartHead";
import ProductCart from "./ProductCart";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

function Cart() {
  const cartItems = useAppSelector((state) => state.cart.data);

  const updateTotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.subTotal, 0);
  }, [cartItems]);

  return (
    <Stack direction="row" gap={4} sx={{ mt: 5 }}>
      <Paper>
        {cartItems.length > 0 ? (
          <Fragment>
            <CartHead />
            <Box>
              <Scrollbar>
                {cartItems.map((item) => (
                  <ProductCart key={item.product.id} data={item} />
                ))}
              </Scrollbar>
            </Box>
          </Fragment>
        ) : (
          <Box>
            <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
              <IconButton color="error">
                <Iconify icon="bi:cart-x-fill" color="#000000" height={60} width={60} />
              </IconButton>
              <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
                Giỏ hàng của bạn đang trống
              </Typography>

              <Button to={publicRoutes.PRODUCT.path} size="large" variant="contained" component={Link}>
                Trở lại mua hàng
              </Button>
            </ContentStyle>
          </Box>
        )}
      </Paper>
      <Paper
        sx={{
          minWidth: 300,
          height: "100%",
        }}
      >
        <Typography>Box2</Typography>
      </Paper>
    </Stack>
  );
}

export default Cart;

import { Box, Divider, IconButton, Stack, styled, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Iconify, Scrollbar } from "~/components";
import { useAppSelector } from "~/redux/hooks";
import { publicRoutes } from "~/routes";
import { currencyFormat } from "~/utils/formats";
import CartHead from "./CartHead";
import ProductCart from "./ProductCart";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "50vh",
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
    <Paper elevation={4} sx={{ p: 2, maxHeight: "90vh" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ px: 2.5, py: 1 }}>
        <Typography variant="h3">Shopping Cart</Typography>
        <Typography variant="subtitle1">UserID: username</Typography>
      </Stack>
      {cartItems.length > 8 ? (
        <Box>
          <CartHead />
          <Scrollbar sx={{ maxHeight: "65vh" }}>
            {cartItems.map((item) => (
              <ProductCart key={item.product.id} data={item} />
            ))}
          </Scrollbar>
          <Divider sx={{ borderStyle: "solid" }} />
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1, mr: 2 }}>
            <Typography variant="h5" color="#ff0000">
              Tổng tiền: {currencyFormat(updateTotal)}đ{" "}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 1, mb: 3 }}>
            <Button to={publicRoutes.PRODUCT.path} variant="contained" component={Link}>
              <Iconify
                icon="material-symbols:add-shopping-cart-rounded"
                color="#ffffff"
                height={25}
                width={25}
                sx={{ mr: 1 }}
              />
              Tiếp tục mua sắm
            </Button>
          </Box>
        </Box>
      ) : (
        <Box>
          <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
            <IconButton color="error">
              <Iconify icon="bi:cart-x-fill" color="#6f6f6f" height={60} width={60} />
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
  );
}

export default Cart;

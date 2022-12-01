import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  styled,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/system";
import { Fragment, useMemo } from "react";
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
      <Stack direction="column">
        <Paper sx={{ minWidth: 755 }} elevation={4}>
          {cartItems.length > 0 ? (
            <Fragment>
              <Box height={60} sx={{ p: 2, display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mr: 1 }}>
                  Giỏ hàng
                </Typography>
                <Typography> ({cartItems.length} sản phẩm)</Typography>
              </Box>
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
              </ContentStyle>
            </Box>
          )}
        </Paper>
        <Box display="flex" sx={{ mt: 1 }}>
          <Button to={publicRoutes.PRODUCT.path} size="medium" variant="text" component={Link}>
            <Iconify icon="material-symbols:keyboard-double-arrow-left" height={20} width={30}></Iconify>
            Trở lại mua hàng
          </Button>
        </Box>
      </Stack>
      <Stack direction="column">
        <Paper
          sx={{
            minWidth: 350,
            maxHeight: "600px",
            p: 2,
          }}
          elevation={4}
        >
          <Typography variant="h6" fontWeight="bold">
            Thanh toán
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography fontWeight={400} color="#727272">
              Tổng tiền
            </Typography>
            <Typography variant="body2" fontWeight={700}>
              {`${currencyFormat(updateTotal)}`}đ
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography fontWeight={400} color="#727272">
              Giảm giá
            </Typography>
            <Typography variant="body2" fontWeight={700}>
              - {`${currencyFormat(updateTotal)}`}đ
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography fontWeight={400} color="#727272">
              Phí vận chuyển
            </Typography>
            <Typography variant="body2" fontWeight={700}>
              Free
            </Typography>
          </Box>
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography fontWeight={800} color="#000000">
              Tổng thanh toán
            </Typography>
            <Typography variant="body1" fontWeight={600} color="#ff0000">
              {`${currencyFormat(updateTotal)}`}đ
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
            <Typography fontWeight={500} color="#565656" fontSize={12} fontStyle="italic">
              (Đã bao gồm phí vận chuyển)
            </Typography>
          </Box>
          <Box>
            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Nhập mã... </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                endAdornment={
                  <InputAdornment position="end">
                    <Button variant="text" sx={{ color: "#108b00" }}>
                      Áp dụng
                    </Button>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Box>
        </Paper>

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
          {updateTotal < 1 ? (
            <Button
              variant="contained"
              disabled={true}
              sx={{
                p: 2,
                color: "#ffffff",
                flex: 1,
              }}
            >
              Thanh toán
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{
                p: 2,
                color: "#ffffff",
                flex: 1,
                backgroundColor: "#009a1a",
                "&:hover": {
                  backgroundColor: "#006b22",
                  borderColor: "#ffffff",
                },
              }}
            >
              Thanh toán
            </Button>
          )}
        </Box>
      </Stack>
    </Stack>
  );
}

export default Cart;

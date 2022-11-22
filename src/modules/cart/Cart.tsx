import styled from "@emotion/styled";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/system";
import { Iconify, Scrollbar } from "~/components";
import CartHead from "~/modules/cart/CartHead";
import { currencyFormat } from "~/utils/formats";
import Counter from "./Counter";

const ImageThumb = styled("img")(() => ({
  flexShrink: 0,
  width: 130,
  height: 150,
  objectFit: "cover",
}));

function Cart() {
  return (
    <Paper elevation={2}>
      <Scrollbar>
        <Box sx={{ minHeight: "90vh", ml: 2, p: 1 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ px: 2.5, py: 1 }}>
            <Typography variant="h3">Shopping Cart</Typography>
            <Typography variant="subtitle1">UserID</Typography>
          </Stack>
          <Divider sx={{ borderStyle: "solid", mb: 3, mt: 4 }} />
          <CartHead />
          <Divider sx={{ borderStyle: "solid", mb: 3, mt: 4 }} />
          <Box>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={3}
              sx={{ width: "100%" }}
            >
              <Stack direction="row" alignItems="center" spacing={3}>
                <ImageThumb src="https://img.srv1.hodine.com/themes/GRP.000002/PID.000000214/images/2da5a361-acb8-49e4-be72-1096bdaeadac[1]-1594632418.jpeg" />
                <Box sx={{ flexGrow: 0, overflow: "hidden", width: 250 }}>
                  <Typography variant="subtitle2" noWrap>
                    Áo ấm
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
                    Áo được làm từ vải cotton 99%, mềm mịn, chống nhăn, giữ ấm cho bạn suốt mùa đông
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: "text.secondary" }} noWrap>
                    10 sản phẩm còn lại
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={4}>
                <Typography variant="subtitle2" width={85} textAlign="right">{`${currencyFormat(
                  1000000,
                )}đ`}</Typography>
              </Stack>
              <Counter />
              <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={4}>
                <Typography variant="subtitle2" width={85} textAlign="right">{`${currencyFormat(
                  1000000,
                )}đ`}</Typography>
                <IconButton color="error">
                  <Iconify icon="ic:round-delete-outline" color="#6f6f6f" />
                </IconButton>
              </Stack>
            </Stack>
            <Divider sx={{ borderStyle: "solid", mb: 1, mt: 3 }} />
          </Box>
        </Box>
      </Scrollbar>
    </Paper>
  );
}

export default Cart;

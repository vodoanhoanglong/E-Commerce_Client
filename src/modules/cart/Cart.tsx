import styled from "@emotion/styled";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import { Stack } from "@mui/system";
import { Iconify, Scrollbar } from "~/components";
import CartHead from "~/modules/cart/CartHead";
import { currencyFormat } from "~/utils/formats";
import { homeProducts } from "../Landing/data";

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
            <Typography variant="subtitle1">UserID: username</Typography>
          </Stack>
          <Divider sx={{ borderStyle: "solid", mb: 3, mt: 4 }} />
          <CartHead />
          <Divider sx={{ borderStyle: "solid", mb: 3, mt: 4 }} />
          {homeProducts.map((item) => (
            <Box key={item.id}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={3}
                sx={{ width: "100%" }}
              >
                <Stack direction="row" alignItems="center" spacing={3}>
                  <ImageThumb src={item.image} />
                  <Box sx={{ flexGrow: 0, overflow: "hidden", width: 250 }}>
                    <Typography variant="subtitle2" noWrap>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
                      {item.description}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: "text.secondary" }} noWrap>
                      {item.qtyStock} sản phẩm còn lại
                    </Typography>
                  </Box>
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={4}>
                  <Typography variant="subtitle2" width={85} textAlign="right">{`${currencyFormat(
                    item.price,
                  )}đ`}</Typography>
                </Stack>
                <Counter />
                <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={4}>
                  <Typography variant="subtitle2" width={85} textAlign="right">{`${currencyFormat(
                    item.price,
                  )}đ`}</Typography>
                  <Tooltip title="Xóa sản phẩm">
                    <IconButton color="error">
                      <Iconify icon="ic:round-delete-outline" color="#6f6f6f" />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Stack>
              <Divider sx={{ borderStyle: "solid", mb: 1, mt: 3 }} />
            </Box>
          ))}
        </Box>
      </Scrollbar>
    </Paper>
  );
}

export default Cart;

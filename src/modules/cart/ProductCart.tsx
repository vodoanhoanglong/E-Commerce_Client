import styled from "@emotion/styled";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import { Stack } from "@mui/system";
import { Iconify, Scrollbar } from "~/components";
import { CartProduct } from "~/models";
import { currencyFormat } from "~/utils/formats";

import Counter from "./Counter";

interface IProductCartProps {
  data: CartProduct;
}

const ImageThumb = styled("img")(() => ({
  flexShrink: 0,
  width: 130,
  height: 150,
  objectFit: "cover",
}));

function ProductCart({ data }: IProductCartProps) {
  return (
    <Paper elevation={2}>
      <Scrollbar>
        <Box sx={{ ml: 2, p: 1 }}>
          <Divider sx={{ borderStyle: "solid", mb: 3, mt: 2 }} />

          <Box key={data.product.id}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={3}
              sx={{ width: "100%" }}
            >
              <Stack direction="row" alignItems="center" spacing={3}>
                <ImageThumb src={data.product.image} />
                <Box sx={{ flexGrow: 0, overflow: "hidden", width: 250 }}>
                  <Typography variant="subtitle2" noWrap>
                    {data.product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
                    {data.product.description}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: "text.secondary" }} noWrap>
                    {data.product.qtyStock} sản phẩm còn lại
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={4}>
                <Typography variant="subtitle2" width={95} textAlign="right">{`${currencyFormat(
                  data.product.price,
                )}đ`}</Typography>
              </Stack>
              <Counter />
              <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={4}>
                <Typography variant="subtitle2" width={95} textAlign="right">{`${currencyFormat(
                  data.subTotal,
                )}đ`}</Typography>
                <Tooltip title="Xóa sản phẩm">
                  <IconButton color="error">
                    <Iconify icon="ic:round-delete-outline" color="#6f6f6f" />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Scrollbar>
    </Paper>
  );
}

export default ProductCart;

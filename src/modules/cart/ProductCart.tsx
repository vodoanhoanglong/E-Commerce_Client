import { Box, IconButton, ListItem, styled, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { Stack } from "@mui/system";
import { Iconify } from "~/components";
import { CartProduct } from "~/models";
import { removeFromCart } from "~/redux/features/cartSlice";
import { useAppDispatch } from "~/redux/hooks";
import { currencyFormat } from "~/utils/formats";

import Counter from "./Counter";

interface IProductCartProps {
  data: CartProduct;
}

const ImageThumb = styled("img")(({ theme }) => ({
  flexShrink: 0,
  width: 50,
  height: 50,
  borderRadius: theme.shape.borderRadius,
  objectFit: "cover",
}));

function ProductCart({ data }: IProductCartProps) {
  const dispatch = useAppDispatch();
  return (
    <ListItem key={data.product.id}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: "100%" }}>
        <Stack direction="row" alignItems="center" columnGap={1}>
          <ImageThumb src={data.product.image} />
          <Box sx={{ width: 250 }}>
            <Typography variant="subtitle2" fontWeight="500" noWrap>
              {data.product.name}
            </Typography>
          </Box>
        </Stack>
        <Typography variant="subtitle2" width={125}>{`${currencyFormat(data.product.price)}đ`}</Typography>
        <Counter state={data} />
        <Typography variant="subtitle2" width={125} textAlign="right">{`${currencyFormat(data.subTotal)}đ`}</Typography>
        <Tooltip title="Xóa sản phẩm">
          <IconButton color="error" onClick={() => dispatch(removeFromCart(data.product))}>
            <Iconify icon="eva:close-fill" color="#ff0000" />
          </IconButton>
        </Tooltip>
      </Stack>
    </ListItem>
  );
}

export default ProductCart;

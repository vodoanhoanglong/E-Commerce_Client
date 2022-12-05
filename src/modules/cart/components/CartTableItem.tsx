import { Box, IconButton, Stack, styled, TableCell, TableRow, Typography } from "@mui/material";
import { Iconify } from "~/components";
import { CartItem } from "~/models";
import { removeFromCart, updateQuantity } from "~/redux/features/cartSlice";
import { useAppDispatch } from "~/redux/hooks";
import { currencyFormat } from "~/utils/formats";
import Counter from "./Counter";

interface ICartTableItem {
  item: CartItem;
}

const TableRowStyled = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  transition: theme.transitions.create("background-color"),
}));

const ImgWrapper = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  marginRight: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
}));

function CartTableItem({ item }: ICartTableItem) {
  const { product, quantity, subTotal } = item;
  const dispatch = useAppDispatch();

  const handleUpdateQuantity = (quantity: number) => {
    dispatch(updateQuantity({ product: item.product, value: quantity }));
  };

  return (
    <TableRowStyled>
      <TableCell
        size="medium"
        sx={{
          display: "flex",
          alignItems: "center",
          borderBottom: "none",
        }}
      >
        <ImgWrapper>
          <img
            src={product.images.length > 0 ? product.images[0].url : "/static/illustrations/illustration_product.svg"}
            alt={item.product.name}
          />
        </ImgWrapper>
        <Stack>
          <Typography variant="subtitle2" fontWeight="bold">
            {product.name}
          </Typography>
          <Typography variant="caption" fontWeight={500} color="grey">
            {`available: ${product.quantityStore}`}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell size="medium">{`${currencyFormat(product.price)}đ`}</TableCell>
      <TableCell size="medium" sx={{ width: "85px" }}>
        <Counter value={quantity} onUpdateValue={handleUpdateQuantity} />
      </TableCell>
      <TableCell align="right" size="medium" sx={{ width: "150px" }}>{`${currencyFormat(subTotal)}đ`}</TableCell>
      <TableCell size="medium" sx={{ minWidth: "72px" }}>
        <IconButton color="error" onClick={() => dispatch(removeFromCart(product))}>
          <Iconify icon="eva:close-fill" color="#DF3E30" />
        </IconButton>
      </TableCell>
    </TableRowStyled>
  );
}

export default CartTableItem;

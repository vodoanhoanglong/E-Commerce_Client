import { Box, IconButton, Stack, styled, TableCell, TableRow, Typography } from "@mui/material";
import { Iconify } from "~/components";
import { CartProduct } from "~/models";
import { removeFromCart } from "~/redux/features/cartSlice";
import { useAppDispatch } from "~/redux/hooks";
import { currencyFormat } from "~/utils/formats";
import Counter from "./Counter";

interface ICartTableItem {
  item: CartProduct;
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
  const dispatch = useAppDispatch();
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
          <img src={item.product.images[0].url} alt={item.product.name} />
        </ImgWrapper>
        <Stack>
          <Typography variant="subtitle2" fontWeight="bold">
            {item.product.name}
          </Typography>
          <Typography variant="caption" fontWeight={500} color="grey">
            {`available: ${item.product.quantityStore}`}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell size="medium">{`${currencyFormat(item.product.price)}đ`}</TableCell>
      <TableCell size="medium" sx={{ width: "85px" }}>
        <Counter state={item} />
      </TableCell>
      <TableCell align="right" size="medium" sx={{ width: "150px" }}>{`${currencyFormat(item.subTotal)}đ`}</TableCell>
      <TableCell size="medium">
        <IconButton color="error" onClick={() => dispatch(removeFromCart(item.product))}>
          <Iconify icon="eva:close-fill" color="#DF3E30" />
        </IconButton>
      </TableCell>
    </TableRowStyled>
  );
}

export default CartTableItem;

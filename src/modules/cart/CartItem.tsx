import { Box, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Iconify } from "~/components";
import { CartProduct } from "~/models";
import { currencyFormat } from "~/utils/formats";
import Counter from "./Counter";

interface CartItemProps {
  data: CartProduct;
}

const StyledListItem = styled(ListItem)(({ theme }) => ({
  transition: theme.transitions.create("background-color"),
  "&:hover": {
    backgroundColor: theme.palette.grey[200],
  },
}));

const ImageThumb = styled("img")(() => ({
  width: 80,
  height: 50,
  objectFit: "cover",
}));

function CartItem({ data }: CartItemProps) {
  return (
    <StyledListItem>
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} sx={{ width: "100%" }}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ flex: 1 }}>
          <ImageThumb src={data.product.image} />
          <Box>
            <Typography variant="subtitle2" noWrap>
              {data.product.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
              {data.product.description}
            </Typography>
          </Box>
        </Stack>
        <Counter />
        <Typography variant="subtitle2">{`${currencyFormat(data.subTotal)}đ`}</Typography>
        <IconButton color="error">
          <Iconify icon="eva:close-fill" color="#DF3E30" />
        </IconButton>
      </Stack>
    </StyledListItem>
  );
}

export default CartItem;

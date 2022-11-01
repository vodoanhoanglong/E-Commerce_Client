import { Box, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Iconify } from "~/components";
import Counter from "./Counter";

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

function CartItem() {
  return (
    <StyledListItem>
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} sx={{ width: "100%" }}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ flex: 1 }}>
          <ImageThumb src="https://picsum.photos/200" />
          <Box>
            <Typography variant="subtitle2" noWrap>
              {"Items Name"}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
              {"Items Description"}
            </Typography>
          </Box>
        </Stack>
        <Counter />
        <Typography variant="subtitle2">{`$ ${3000000}`}</Typography>
        <IconButton color="error">
          <Iconify icon="eva:close-fill" color="#DF3E30" />
        </IconButton>
      </Stack>
    </StyledListItem>
  );
}

export default CartItem;

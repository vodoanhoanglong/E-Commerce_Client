import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import { Fragment, useRef, useState } from "react";
import { Iconify, MenuPopover, Scrollbar } from "~/components";
import Counter from "./Counter";

const CartItem = () => (
  <ListItem>
    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} sx={{ width: "100%" }}>
      <Stack direction="row" alignItems="center" spacing={2} sx={{ flex: 1 }}>
        <Avatar sx={{ bgcolor: "background.neutral" }} src="https://picsum.photos/200" />
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
      <Typography variant="subtitle2">{`$${3000000}`}</Typography>
    </Stack>
  </ListItem>
);

function CartWidget() {
  const anchorRef = useRef(null);
  const [openPopper, setOpenPopper] = useState(null);

  const handleOpen = (event: any) => {
    setOpenPopper(event.currentTarget);
  };

  const handleClose = () => {
    setOpenPopper(null);
  };

  return (
    <Fragment>
      <IconButton
        ref={anchorRef}
        color={openPopper ? "primary" : "default"}
        onClick={handleOpen}
        sx={{ width: 40, height: 40 }}
      >
        <Badge showZero badgeContent={3} color="error" max={99}>
          <Iconify icon="eva:shopping-cart-fill" width={24} height={24} />
        </Badge>
      </IconButton>
      <MenuPopover
        open={Boolean(openPopper)}
        anchorEl={openPopper}
        onClose={handleClose}
        sx={{ width: 600, p: 0, mt: 1.5, ml: 0.75 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">My Cart</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              You have {1} items pending payment
            </Typography>
          </Box>
          <Iconify icon="eva:shopping-cart-fill" width={24} height={24} color="#1877F2" />
        </Box>
        <Divider sx={{ borderStyle: "dashed" }} />
        <Scrollbar sx={{ height: { xs: 340, sm: "auto" } }}>
          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: "overline" }}>
                ITEMS
              </ListSubheader>
            }
          >
            <CartItem />
            <CartItem />
            <CartItem />
          </List>
        </Scrollbar>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ px: 2.5, pb: 0.5 }}>
          <Typography variant="subtitle1" color="text.secondary">
            Total
          </Typography>
          <Typography variant="subtitle2" color="text.primary">{`$${3000000}`}</Typography>
        </Stack>
        <Divider sx={{ borderStyle: "dashed" }} />
        <Box sx={{ p: 1 }}>
          {/* Can replace Button by Link Component to CartDetail Page */}
          <Button fullWidth disableRipple>
            View Cart Details
          </Button>
        </Box>
      </MenuPopover>
    </Fragment>
  );
}

export default CartWidget;

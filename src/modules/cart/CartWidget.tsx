import { Badge, Box, Button, Divider, IconButton, List, ListSubheader, Stack, Typography } from "@mui/material";
import { Fragment, useRef, useState } from "react";
import { Iconify, MenuPopover, Scrollbar } from "~/components";
import CartItem from "./CartItem";

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
        </Box>
        <Divider sx={{ borderStyle: "dashed" }} />
        <List
          disablePadding
          subheader={
            <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: "overline" }}>
              ITEMS
            </ListSubheader>
          }
        >
          <Scrollbar sx={{ maxHeight: 325 }}>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </Scrollbar>
        </List>

        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ px: 2.5, py: 1 }}>
          <Typography variant="subtitle1">Total</Typography>
          <Typography variant="subtitle2">{`$${3000000}`}</Typography>
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

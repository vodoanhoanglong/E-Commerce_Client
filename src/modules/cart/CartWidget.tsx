import { Badge, Box, Button, Divider, IconButton, List, ListSubheader, Stack, Typography } from "@mui/material";
import { Fragment, useCallback, useRef, useState } from "react";
import { Iconify, MenuPopover, Scrollbar } from "~/components";
import { useAppSelector } from "~/redux/hooks";
import { currencyFormat } from "~/utils/formats";
import CartItem from "./CartItem";

function CartWidget() {
  const cartItems = useAppSelector((state) => state.cart.data);
  const anchorRef = useRef(null);
  const [openPopper, setOpenPopper] = useState(null);

  const handleOpen = (event: any) => {
    setOpenPopper(event.currentTarget);
  };

  const handleClose = () => {
    setOpenPopper(null);
  };

  const updateTotal = useCallback(() => {
    return cartItems.reduce((acc, item) => acc + item.subTotal, 0);
  }, [cartItems]);

  return (
    <Fragment>
      <IconButton
        ref={anchorRef}
        color={openPopper ? "primary" : "default"}
        onClick={handleOpen}
        sx={{ width: 40, height: 40 }}
      >
        <Badge showZero badgeContent={cartItems.length} color="error" max={99}>
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
            <Typography variant="subtitle1">Giỏ Hàng</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {cartItems.length > 0
                ? `Bạn có ${cartItems.length} sản phẩm đang chờ thanh toán!`
                : "Giỏ hàng của bạn đang trống!"}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ borderStyle: "dashed" }} />
        <List
          disablePadding
          subheader={
            <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: "overline" }}>
              Sản phẩm
            </ListSubheader>
          }
        >
          <Scrollbar sx={{ maxHeight: 325 }}>
            {cartItems.map((item) => (
              <CartItem key={item.product.id} data={item} />
            ))}
          </Scrollbar>
        </List>

        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ px: 2.5, py: 1 }}>
          <Typography variant="subtitle1">Thành Tiền:</Typography>
          <Typography variant="subtitle1">{`${currencyFormat(updateTotal())} VNĐ`}</Typography>
        </Stack>
        <Divider sx={{ borderStyle: "dashed" }} />
        <Box sx={{ p: 1 }}>
          {/* Can replace Button by Link Component to CartDetail Page */}
          <Button fullWidth disableRipple>
            Xem chi tiết giỏ hàng
          </Button>
        </Box>
      </MenuPopover>
    </Fragment>
  );
}

export default CartWidget;

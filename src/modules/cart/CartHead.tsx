import { Box, Stack, Typography } from "@mui/material";
function CartHead() {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ px: 2.5, py: 1 }}>
        <Typography variant="h3">Shopping Cart</Typography>
        <Typography variant="subtitle1">UserID: username</Typography>
      </Stack>
      <Box width="100%" sx={{ display: "flex" }}>
        <Typography variant="body2" fontWeight="bold" width={75} textAlign="left" sx={{ ml: 3 }}>
          Sản phẩm
        </Typography>

        <Typography variant="body2" fontWeight="bold" width={275} textAlign="center">
          Thông tin sản phẩm
        </Typography>
        <Typography variant="body2" fontWeight="bold" width={380} textAlign="right">
          Đơn giá
        </Typography>

        <Typography variant="body2" fontWeight="bold" width={335} textAlign="right">
          Số lượng
        </Typography>
        <Typography variant="body2" fontWeight="bold" width={345} textAlign="right">
          Thành tiền
        </Typography>
        <Typography variant="body2" fontWeight="bold" width={60} textAlign="right" sx={{ ml: 3 }}>
          Thao tác
        </Typography>
      </Box>
    </Box>
  );
}

export default CartHead;

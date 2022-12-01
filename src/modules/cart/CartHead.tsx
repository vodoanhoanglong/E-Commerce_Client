import { Box, Stack, Typography } from "@mui/material";
function CartHead() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        backgroundColor: "#F4F6F8",
        padding: "16px",
      }}
    >
      <Box sx={{ width: 300 }}>
        <Typography variant="body2" fontWeight="bold">
          Sản phẩm
        </Typography>
      </Box>
      <Box sx={{ width: 125 }}>
        <Typography variant="body2" fontWeight="bold">
          Giá bán
        </Typography>
      </Box>
      <Box sx={{ width: 85 }}>
        <Typography variant="body2" fontWeight="bold">
          Số lượng
        </Typography>
      </Box>
      <Box sx={{ width: 125 }}>
        <Typography variant="body2" fontWeight="bold" textAlign="center">
          Thành tiền
        </Typography>
      </Box>
      <Box></Box>
    </Stack>
  );
}

export default CartHead;

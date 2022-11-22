import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
function CartHead() {
  return (
    <Fragment>
      <Box width="100%" sx={{ display: "flex" }}>
        <Typography variant="body2" fontWeight="bold" width={105} textAlign="left">
          Sản phẩm
        </Typography>

        <Typography variant="body2" fontWeight="bold" width={305} textAlign="center">
          Thông tin sản phẩm
        </Typography>
        <Typography variant="body2" fontWeight="bold" width={170} textAlign="right">
          Số tiền
        </Typography>

        <Typography variant="body2" fontWeight="bold" width={195} textAlign="right">
          Số lượng
        </Typography>
        <Typography variant="body2" fontWeight="bold" width={185} textAlign="right">
          Số tiền
        </Typography>
        <Typography variant="body2" fontWeight="bold" width={60} textAlign="right" sx={{ ml: 4 }}>
          Thao tác
        </Typography>
      </Box>
    </Fragment>
  );
}

export default CartHead;

import { Box, Button, Divider, IconButton, TextField, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Tooltip from "@mui/material/Tooltip";
import { Iconify } from "~/components";
import { currencyFormat } from "~/utils/formats";

function CartProfile() {
  return (
    <Box width="30%" sx={{ ml: 3 }}>
      <Paper>
        <Box>
          <Typography variant="h5" textAlign="center" sx={{ mb: 2, mt: 3 }}>
            Giỏ hàng
          </Typography>
          <Divider sx={{ borderStyle: "solid", mb: 1, mt: 6 }} />
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography color="#000000" fontWeight="bold">
              Số sản phẩm: 1
            </Typography>
            <Typography color="#000000" fontWeight="bold">{`${currencyFormat(1000000)}đ`}</Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "16px", color: "#000000" }}>Mã giảm giá</Typography>
            <TextField
              helperText="Nhập mã bên trên"
              label="Mã khuyến mãi"
              id="outlined-size-normal"
              sx={{ width: "400px", mt: 2, borderColor: "red" }}
            />
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "16px", color: "#000000" }}>
              Phương thức thanh toán
            </Typography>
            <FormControl>
              <RadioGroup defaultValue="female" name="radio-buttons-group">
                <FormControlLabel value="female" control={<Radio />} label="Chuyển khoản" />
                <FormControlLabel value="male" control={<Radio />} label="Thanh toán khi nhận hàng" />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around", mt: 4 }}>
            <Typography color="#000000" variant="h5">
              Tổng tiền thanh toán:
            </Typography>
            <Typography color="#000000" variant="h5">{`${currencyFormat(1000000)}đ`}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button variant="contained" sx={{ width: "200px" }}>
              Thanh toán
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", mt: 10, justifyContent: "flex-end" }}>
          <Tooltip title="Tiếp tục mua sắm">
            <IconButton>
              <Iconify icon="material-symbols:arrow-right-alt-rounded" width={35} height={35} />
            </IconButton>
          </Tooltip>
        </Box>
      </Paper>
    </Box>
  );
}

export default CartProfile;

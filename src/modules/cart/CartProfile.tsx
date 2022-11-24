import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Iconify } from "~/components";
import { publicRoutes } from "~/routes";
import { currencyFormat } from "~/utils/formats";

function CartProfile() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const [disable, setDisable] = useState(false);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value === "") {
      setHelperText("Vui lòng chọn hình thức thanh toán");
      setError(true);
      // setDisable(true);
    } else if (value === "cost") {
      setHelperText("Bạn chọn thanh toán tiền mặt");
      setError(false);
    } else {
      setHelperText("Bạn chọn chuyển khoản");
      setError(false);
    }
  };

  return (
    <Box
      width="30%"
      sx={{
        backgroundColor: "#fff9f9",
        minHeight: "90vh",
        p: 1,
        borderLeft: "1px solid #d4d4d4",
        position: "relative",
      }}
    >
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src="https://xcdn-cf.vuihoc.vn/upload/5c209fe6176b0/2022/04/16/1aa2_cheap.png"
            height="50%"
            width="50%"
          ></img>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
          <Typography color="#000000" fontWeight="bold">
            Số sản phẩm: 1
          </Typography>
          <Typography color="#ff0000" fontWeight="bold">
            Tổng tiền: {`${currencyFormat(1000000)}đ`}
          </Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "16px", color: "#000000" }}>Mã giảm giá</Typography>
          <TextField
            helperText="Nhập mã bên trên"
            label="Mã khuyến mãi"
            id="outlined-size-normal"
            sx={{ width: "400px", mt: 2, borderColor: "#000000" }}
          />
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "16px", color: "#000000" }}>
            Phương thức thanh toán
          </Typography>
          <form onSubmit={handleSubmit}>
            <FormControl error={error} variant="standard">
              <RadioGroup defaultValue="pay-type" name="radio-buttons-group" onChange={handleRadioChange} value={value}>
                <FormControlLabel value="pay" control={<Radio />} label="Chuyển khoản" />
                <FormControlLabel value="cost" control={<Radio />} label="Thanh toán khi nhận hàng" />
                <FormHelperText>{helperText}</FormHelperText>
              </RadioGroup>
            </FormControl>
            <Box sx={{ display: "flex", justifyContent: "space-around", mt: 4 }}>
              <Typography color="#000000" variant="h5">
                Tổng tiền thanh toán:
              </Typography>
              <Typography color="#000000" variant="h5">{`${currencyFormat(1000000)}đ`}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Button variant="contained" sx={{ width: "200px" }} type="submit" disabled={disable}>
                Thanh toán
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
      <Box sx={{ bottom: 0, right: 0, mt: 1, position: "absolute" }}>
        <Tooltip title="Tiếp tục mua sắm">
          <Link to={publicRoutes.PRODUCT.path}>
            <IconButton>
              <Iconify icon="material-symbols:arrow-right-alt-rounded" width={35} height={35} />
            </IconButton>
          </Link>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default CartProfile;

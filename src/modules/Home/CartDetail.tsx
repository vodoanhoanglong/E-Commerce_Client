import styled from "@emotion/styled";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Iconify from "~/components/Iconify";
import { ContainerBox } from "~/layouts/components/CustomBox";

function CartDetail() {
  const BoxImage = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "none",
    borderBottom: "1px solid #000",
    opacity: 0.7,
  }));

  return (
    <Box sx={{ m: "auto" }}>
      <ContainerBox>
        <Drawer
          open={true}
          anchor="top"
          PaperProps={{
            sx: { height: "70%", backgroundColor: "rgb(255,255,255)", backgroundPosition: "center" },
          }}
        >
          <Typography variant="h2" sx={{ display: "flex", justifyContent: "center" }}>
            Cart
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box width="10%" minWidth="100px" sx={{ p: 2, m: 1 }}>
              <BoxImage>
                <img src="https://demo.w3layouts.com/demos_new/template_demo/06-02-2018/downy_shoes-demo_Free/115804702/web/images/d2.jpg" />
              </BoxImage>
              <BoxImage>
                <img src="https://demo.w3layouts.com/demos_new/template_demo/06-02-2018/downy_shoes-demo_Free/115804702/web/images/d2.jpg" />
              </BoxImage>
              <BoxImage>
                <img src="https://demo.w3layouts.com/demos_new/template_demo/06-02-2018/downy_shoes-demo_Free/115804702/web/images/d2.jpg" />
              </BoxImage>
            </Box>
            <Box width="35%">
              <img src="https://demo.w3layouts.com/demos_new/template_demo/06-02-2018/downy_shoes-demo_Free/115804702/web/images/d2.jpg" />
            </Box>
            <Box width="40%" maxWidth="65%">
              <Typography variant="h4" sx={{ color: "#3ec2ff" }}>
                Shoe Rock Vision(SRV) Sneakers (Blue)
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="body2"
                  sx={{ color: "#797979", fontSize: "18px", textDecoration: "line-through", mr: 3 }}
                >
                  $150000đ
                </Typography>
                <Typography variant="body2" sx={{ color: "#ff0000", fontSize: "22px", fontWeight: "bold" }}>
                  $120000đ
                </Typography>
              </Box>
              <Typography sx={{ fontSize: "18px", mt: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita quibusdam aspernatur,
                sapiente consectetur accusantium perspiciatis praesentium eligendi, in fugiat?
              </Typography>
              <Box sx={{ display: "flex", mt: 3, alignItems: "center" }}>
                <IconButton sx={{ mr: 2 }}>
                  <Iconify icon="fluent-mdl2:calculator-addition" width={30} height={25} />
                </IconButton>
                <Typography variant="body2" sx={{ fontSize: "24px", fontFamily: "Nonito", fontWeight: "bold" }}>
                  1
                </Typography>
                <IconButton sx={{ ml: 2 }}>
                  <Iconify icon="subway:subtraction-1" width={30} height={25} />
                </IconButton>
              </Box>
              <div style={{ width: "100%", height: "1px", backgroundColor: "#030014", margin: "20px auto" }}></div>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <FormControl sx={{ mt: 2 }}>
                  <FormLabel id="color-product" sx={{ color: "red" }}>
                    Chọn màu
                  </FormLabel>
                  <RadioGroup row aria-labelledby="color-option" name="row-radio-buttons-group">
                    <FormControlLabel value="red" control={<Radio />} label="Đỏ" />
                    <FormControlLabel value="black" control={<Radio />} label="Đen" />
                    <FormControlLabel value="Blue" control={<Radio />} label="Xanh" />
                  </RadioGroup>
                </FormControl>

                <FormControl sx={{ mt: 2, ml: 10 }}>
                  <FormLabel id="size-product" sx={{ color: "red" }}>
                    Size
                  </FormLabel>
                  <RadioGroup row aria-labelledby="size-option" name="row-radio-buttons-group">
                    <FormControlLabel value="S" control={<Radio />} label="S" />
                    <FormControlLabel value="M" control={<Radio />} label="M" />
                    <FormControlLabel value="XL" control={<Radio />} label="XL" />
                    <FormControlLabel value="2XL" control={<Radio />} label="2XL" />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Button variant="contained" sx={{ mt: 2, fontSize: "16px" }}>
                <IconButton sx={{ mr: 2 }}>
                  <Iconify icon="material-symbols:garden-cart-outline-rounded" color="#fff" width={30} height={30} />
                </IconButton>
                Thêm vào giỏ hàng
              </Button>
            </Box>
          </Box>
        </Drawer>
      </ContainerBox>
    </Box>
  );
}

export default CartDetail;

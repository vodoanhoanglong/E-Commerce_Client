import { Box, Collapse, styled, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { publicRoutes } from "~/routes";

const HomeMain = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    margin: "0",
    justifyContent: "center",
    gap: theme.spacing(10),
    marginLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 2, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1100 } : {})}>
      <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "100vh" }} id="homemain">
        <CustomBox>
          <Box sx={{ flex: "1.25" }}>
            <Typography variant="body2" sx={{ fontSize: "22px", color: "#687690", fontWeight: "500", mt: 10, mb: 4 }}>
              Welcome to The Shopping Mall
            </Typography>
            <Title variant="h1">Giao hàng tận tay</Title>
            <Typography variant="h2" sx={{ fontSize: "26px", color: "#0A8BFF", fontFamily: "Apple Color Emoji" }}>
              Đặt hàng ngay hôm nay
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}>
              Đến với shop của chúng tôi các bạn có thể trải nghiệm nhiều loại sản phẩm kèm theo những khuyến mãi cực
              khủng!
            </Typography>
            <Button
              to={publicRoutes.PRODUCT.path}
              variant="contained"
              sx={{ width: "170px", borderRadius: "none", height: "50px", textTransform: "none", fontSize: "15px" }}
              component={Link}
            >
              Đến cửa hàng ngay
            </Button>
          </Box>

          <Box sx={{ flex: "1.6", mt: 7 }}>
            <img
              src="https://simpleshop.vn/blog/wp-content/uploads/2021/07/TND_M119_05-removebg-preview-1.png"
              alt="homemainImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Box>
    </Collapse>
  );
};

export default HomeMain;

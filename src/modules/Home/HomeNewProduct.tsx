import { Box, styled, Typography } from "@mui/material";

const HomeNewProduct = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(4, 0, 4, 0),
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ width: "5%", height: "5px", backgroundColor: "#000339", margin: "10px auto" }}></div>
      <Typography variant="h3" sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: "3" }}>
        Mua sắm thả ga
      </Typography>
      <CustomBox>
        <Typography variant="body2" sx={{ fontSize: "16px", fontWeight: "500", color: "#5a6473", textAlign: "center" }}>
          Những mặt hàng mới liên tục cập nhật
        </Typography>
      </CustomBox>
      <GuidesBox>
        <GuideBox>
          <img src="https://github.com/frontendzone/real-estate-landing-page/blob/main/src/media/buy_icon.png?raw=true" />
          <Typography variant="body2" sx={{ fontWeight: "500", fontSize: "20px", color: "#3b3c45", my: 1 }}>
            Mua sắm tại shop
          </Typography>
          <Box sx={{ cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689ff" }}>
              Mua sắm
            </Typography>
          </Box>
        </GuideBox>

        <GuideBox>
          <img src="https://github.com/frontendzone/real-estate-landing-page/blob/main/src/media/rent_icon.png?raw=true" />
          <Typography variant="body2" sx={{ fontWeight: "500", fontSize: "20px", color: "#3b3c45", my: 1 }}>
            Thương hiệu chính hãng
          </Typography>
          <Box sx={{ cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689ff" }}>
              Mua sắm an toàn
            </Typography>
          </Box>
        </GuideBox>

        <GuideBox>
          <img src="https://github.com/frontendzone/real-estate-landing-page/blob/main/src/media/sell_icon.png?raw=true" />
          <Typography variant="body2" sx={{ fontWeight: "500", fontSize: "20px", color: "#3b3c45", my: 1 }}>
            Tràn ngập khuyến mãi
          </Typography>
          <Box sx={{ cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689ff" }}>
              Mua sắm tiết kiệm
            </Typography>
          </Box>
        </GuideBox>
      </GuidesBox>
    </Box>
  );
};

export default HomeNewProduct;

import { Box, styled, Typography } from "@mui/material";

const homeProducts = [
  {
    id: "1",
    img: "https://img.srv1.hodine.com/themes/GRP.000002/PID.000000214/images/2da5a361-acb8-49e4-be72-1096bdaeadac[1]-1594632418.jpeg",
    price: "3500000đ",
    name: "Áo da",
    buy: "Mua ngay",
    like: "Yêu thích",
    more: "Xem thêm",
  },

  {
    id: "2",
    img: "https://img.srv1.hodine.com/themes/GRP.000002/PID.000000214/images/d510cf53-6071-4364-89d8-709f5dd29a64[1]-1594632386.jpeg",
    price: "4700000d",
    name: "Áo ấm mùa đông",
    buy: "Mua ngay",
    like: "Yêu thích",
    more: "Xem thêm",
  },

  {
    id: "3",
    img: "https://img.srv1.hodine.com/themes/GRP.000002/PID.000000214/images/a368b735-97f8-40c7-b810-86441aabd89e[1]-1594632352.jpeg",
    price: "4700000đ",
    name: "Áo khoác dù",
    buy: "Mua ngay",
    like: "Yêu thích",
    more: "Xem thêm",
  },
];

const HomeProducts = () => {
  const ProductBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    maxWidth: 300,
    backgroundColor: "#fff",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  const InfoBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  const ImgContainer = styled(Box)(() => ({
    width: "100%",
  }));

  return (
    <>
      {homeProducts.map((item) => (
        <ProductBox key={item.id}>
          <ImgContainer>
            <img src={item.img} alt="producthome" style={{ maxWidth: "100%" }} />
          </ImgContainer>
          <Box sx={{ padding: "1rem" }}>
            <Typography variant="body2" sx={{ fontWeight: "700" }}>
              {item.price}
            </Typography>
            <Typography variant="body2" sx={{ my: 2 }}>
              {item.name}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <InfoBox>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {item.buy}
                </Typography>
              </InfoBox>
              <InfoBox>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {item.like}
                </Typography>
              </InfoBox>
              <InfoBox>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {item.more}
                </Typography>
              </InfoBox>
            </Box>
          </Box>
        </ProductBox>
      ))}
    </>
  );
};

export default HomeProducts;

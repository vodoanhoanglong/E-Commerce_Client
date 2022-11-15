import { Box, IconButton, Rating, Stack, styled, Tooltip, Typography } from "@mui/material";
import Iconify from "~/components/Iconify";

const homeProducts = [
  {
    id: "1",
    img: "https://img.srv1.hodine.com/themes/GRP.000002/PID.000000214/images/2da5a361-acb8-49e4-be72-1096bdaeadac[1]-1594632418.jpeg",
    price: "3500000đ",
    name: "Áo da",
  },

  {
    id: "2",
    img: "https://img.srv1.hodine.com/themes/GRP.000002/PID.000000214/images/d510cf53-6071-4364-89d8-709f5dd29a64[1]-1594632386.jpeg",
    price: "4700000d",
    name: "Áo ấm mùa đông",
  },

  {
    id: "3",
    img: "https://img.srv1.hodine.com/themes/GRP.000002/PID.000000214/images/a368b735-97f8-40c7-b810-86441aabd89e[1]-1594632352.jpeg",
    price: "4700000đ",
    name: "Áo khoác dù",
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
            <Typography variant="body2" sx={{ fontWeight: "700", fontSize: "16px" }}>
              {item.price}
            </Typography>
            <Typography variant="body2" sx={{ my: 1, fontSize: "16px" }}>
              {item.name}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <InfoBox>
                <Tooltip title="Mua ngay">
                  <IconButton>
                    <Iconify icon="el:shopping-cart-sign" width={32} height={32} />
                  </IconButton>
                </Tooltip>
              </InfoBox>
              <InfoBox>
                <Tooltip title="Yêu thích">
                  <IconButton>
                    <Iconify icon="icon-park-solid:like" width={32} height={32} />
                  </IconButton>
                </Tooltip>
              </InfoBox>
              <InfoBox>
                <Tooltip title="Xem thêm">
                  <IconButton>
                    <Iconify icon="fluent:more-circle-20-filled" width={38} height={38} />
                  </IconButton>
                </Tooltip>
              </InfoBox>
            </Box>
            <Typography variant="body2" sx={{ fontSize: "14px", fontWeight: "italic", mt: 1 }}>
              Đánh giá
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={0} precision={1} />
              </Stack>
            </Typography>
          </Box>
        </ProductBox>
      ))}
    </>
  );
};

export default HomeProducts;

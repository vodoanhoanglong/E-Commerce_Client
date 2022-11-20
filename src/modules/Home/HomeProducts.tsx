import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import Iconify from "~/components/Iconify";
import { ImgContainer, InfoBox, ProductBox } from "~/layouts/components/CustomBox";
import { currencyFormat } from "~/utils/formats";

const homeProducts = [
  {
    id: "1",
    img: "https://img.srv1.hodine.com/themes/GRP.000002/PID.000000214/images/2da5a361-acb8-49e4-be72-1096bdaeadac[1]-1594632418.jpeg",
    price: 3500000,
    name: "Áo da",
  },

  {
    id: "2",
    img: "https://img.srv1.hodine.com/themes/GRP.000002/PID.000000214/images/d510cf53-6071-4364-89d8-709f5dd29a64[1]-1594632386.jpeg",
    price: 4700000,
    name: "Áo ấm mùa đông",
  },

  {
    id: "3",
    img: "https://img.srv1.hodine.com/themes/GRP.000002/PID.000000214/images/a368b735-97f8-40c7-b810-86441aabd89e[1]-1594632352.jpeg",
    price: 4700000,
    name: "Áo khoác dù",
  },

  {
    id: "4",
    img: "https://img.srv1.hodine.com/themes/GRP.000002/PID.000000214/images/a368b735-97f8-40c7-b810-86441aabd89e[1]-1594632352.jpeg",
    price: 4700000,
    name: "Áo khoác dù",
  },
  {
    id: "5",
    img: "https://img.srv1.hodine.com/themes/GRP.000002/PID.000000214/images/a368b735-97f8-40c7-b810-86441aabd89e[1]-1594632352.jpeg",
    price: 4700000,
    name: "Áo khoác dù",
  },
  {
    id: "6",
    img: "https://img.srv1.hodine.com/themes/GRP.000002/PID.000000214/images/a368b735-97f8-40c7-b810-86441aabd89e[1]-1594632352.jpeg",
    price: 4700000,
    name: "Áo khoác dù",
  },
];

const HomeProducts = () => {
  return (
    <Box sx={{ ml: 15, mt: 5 }}>
      <Box>
        <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {homeProducts.map((item) => (
            <Grid key={item.id} item xs={4}>
              <ProductBox>
                <ImgContainer>
                  <img src={item.img} alt="producthome" />
                </ImgContainer>
                <Box sx={{ padding: "1rem" }}>
                  <Typography variant="body2" sx={{ fontWeight: "700", fontSize: "16px" }}>
                    {currencyFormat(item.price)}đ
                  </Typography>
                  <Typography variant="body2" sx={{ my: 1, fontSize: "16px" }}>
                    {item.name}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <InfoBox>
                      <Tooltip title="Thêm vào giỏ hàng">
                        <IconButton>
                          <Iconify icon="el:shopping-cart-sign" width={36} height={36} color="#2065D1" />
                        </IconButton>
                      </Tooltip>
                    </InfoBox>
                    <InfoBox>
                      <Tooltip title="Yêu thích">
                        <IconButton>
                          <Iconify icon="icon-park-solid:like" width={36} height={36} />
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
                </Box>
              </ProductBox>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomeProducts;

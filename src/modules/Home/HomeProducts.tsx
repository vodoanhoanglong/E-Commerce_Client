import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import Iconify from "~/components/Iconify";
import { ImgContainer, InfoBox, ProductBox } from "~/layouts/components/CustomBox";
import { homeProducts } from "~/modules/Home/dataHome";
import { currencyFormat } from "~/utils/formats";

const HomeProducts = () => {
  return (
    <Box sx={{ ml: 15, mt: 5 }}>
      <Box>
        <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={4}>
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

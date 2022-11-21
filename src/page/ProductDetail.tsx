import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Stack } from "@mui/material";
import { useLocation } from "react-router";
import { Iconify, Page } from "~/components";
import ContentDetail from "~/modules/ProductDetail/ContentDetail";
import ImageDetail from "~/modules/ProductDetail/ImageDetail";

function ProductDetail() {
  const location = useLocation();
  const data = location.state;

  return (
    <Page title="Thông tin sản phẩm">
      <Container fixed sx={{ mt: 3 }}>
        <Card sx={{ display: "flex" }}>
          <Stack spacing={1} alignItems="center" sx={{ m: 2 }}>
            <CardMedia component="img" height="100%" image={data.image} />
            <ImageDetail />
          </Stack>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent>
              <ContentDetail data={data} />
            </CardContent>
            <CardActions sx={{ ml: 2 }}>
              <Button variant="outlined" size="large">
                <Iconify icon="bi:cart-plus-fill" width={18} height={18} />
                Thêm vào giỏ hàng
              </Button>
              <Button variant="contained" size="large">
                Mua ngay
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Container>
    </Page>
  );
}

export default ProductDetail;

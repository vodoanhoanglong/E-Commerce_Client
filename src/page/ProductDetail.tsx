import { Box, Button, Card, CardActions, CardContent, Container } from "@mui/material";
import { useLocation } from "react-router";
import { Iconify, Page } from "~/components";
import ContentDetail from "~/modules/ProductDetail/ContentDetail";
import ImageDetail from "~/modules/ProductDetail/ImageDetail";
import { addToCart } from "~/redux/features/cartSlice";
import { useAppDispatch } from "~/redux/hooks";

function ProductDetail() {
  const location = useLocation();
  const data = location.state;
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    const quantity = 1;
    const subTotal = data.price * 1;
    dispatch(addToCart({ ...data, quantity, subTotal }));
  };

  return (
    <Page title="Thông tin sản phẩm">
      <Container fixed sx={{ marginBlock: 3 }}>
        <Card sx={{ display: "flex" }}>
          <ImageDetail data={data} />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent>
              <ContentDetail data={data} />
            </CardContent>
            <CardActions sx={{ ml: 2 }}>
              <Button variant="outlined" size="large" onClick={handleAddToCart}>
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

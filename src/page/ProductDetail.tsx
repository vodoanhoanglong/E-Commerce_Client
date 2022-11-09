import { Card, CardContent, CardMedia, Container, Stack, Typography } from "@mui/material";
import { useLocation } from "react-router";
import { Page } from "~/components";
import { currencyFormat } from "~/utils/formats";

function ProductDetail() {
  const location = useLocation();
  const data = location.state;

  return (
    <Page title="Thông tin sản phẩm">
      <Container fixed>
        <Card>
          <Stack direction="row">
            <CardMedia component="img" height="100%" sx={{ width: 400 }} image={data.image} />
            <CardContent>
              <Typography gutterBottom variant="body1" fontSize={25}>
                {data.name}
              </Typography>
              <Typography variant="h6" color="#ff1744">
                {currencyFormat(data.price)} ₫
              </Typography>
            </CardContent>
          </Stack>
        </Card>
      </Container>
    </Page>
  );
}

export default ProductDetail;

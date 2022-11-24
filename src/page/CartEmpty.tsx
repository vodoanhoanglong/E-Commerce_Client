import { Button, Container, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Iconify } from "~/components";
import { publicRoutes } from "~/routes";

import Page from "~/components/Page";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

export default function CartEmpty() {
  return (
    <Page title="Giỏ hàng">
      <Container>
        <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
          <IconButton color="error">
            <Iconify icon="bi:cart-x-fill" color="#6f6f6f" height={60} width={60} />
          </IconButton>
          <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
            Giỏ hàng của bạn đang trống
          </Typography>

          <Button to={publicRoutes.PRODUCT.path} size="large" variant="contained" component={Link}>
            Trở lại mua hàng
          </Button>
        </ContentStyle>
      </Container>
    </Page>
  );
}

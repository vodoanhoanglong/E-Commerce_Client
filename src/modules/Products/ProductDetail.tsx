import { Container } from "@mui/material";
import { useLocation } from "react-router";
import { Page } from "~/components";

function ProductDetail() {
  const location = useLocation();
  const data = location.state;

  return (
    <Page title="Thông tin sản phẩm">
      <Container fixed>adshsn</Container>
    </Page>
  );
}

export default ProductDetail;

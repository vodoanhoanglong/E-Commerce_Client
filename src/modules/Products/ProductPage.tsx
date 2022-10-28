import { Typography } from "@mui/material";
import { Page } from "~/components";
// import Button from "~/theme/overrides/Button";
import Button from "@mui/material/Button";
function Banner() {
  return (
    <Page title="products">
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "left",
        }}
      >
        Danh mục
      </Typography>
      <Page title="bt">
        <Button sx={{ color: "text.secondary", mb: 1, textAlign: "left" }}>Điện tử</Button>
        <Button sx={{ color: "text.secondary", mb: 1, textAlign: "left" }}>Thức ăn</Button>
        <Button sx={{ color: "text.secondary", mb: 1, textAlign: "left" }}>Thời trang</Button>
      </Page>
    </Page>
  );
}

export default Banner;

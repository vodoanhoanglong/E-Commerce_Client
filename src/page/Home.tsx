import { Box } from "@mui/material";
import { Page } from "~/components";
import HomeCart from "~/modules/Home/HomeCart";
import HomeFeature from "~/modules/Home/HomeFeature";
import HomeMain from "~/modules/Home/HomeMain";
import HomeNewProduct from "~/modules/Home/HomeNewProduct";

function Home() {
  return (
    <Page title="Trang Chủ">
      <Box sx={{ backgroundColor: "#E6F0FF" }}>
        <HomeMain />
        <HomeNewProduct />
        <HomeCart />
        <HomeFeature />
      </Box>
    </Page>
  );
}
export default Home;

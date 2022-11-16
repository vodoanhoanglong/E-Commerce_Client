import { Box } from "@mui/material";
import { Page } from "~/components";
import HomeCart from "~/modules/Home/HomeCart";
import HomeFeature from "~/modules/Home/HomeFeature";
import HomeInteractive from "~/modules/Home/HomeInteractive";
import HomeMain from "~/modules/Home/HomeMain";
import HomeNewProduct from "~/modules/Home/HomeNewProduct";
import HomeSlider from "~/modules/Home/HomeSlider";

function Home() {
  return (
    <Page title="Trang Chủ">
      <Box sx={{ backgroundColor: "#fff" }}>
        <HomeMain />
        <HomeCart />
        <HomeInteractive />
        <HomeNewProduct />
        <HomeFeature />
        <HomeSlider />
      </Box>
    </Page>
  );
}
export default Home;

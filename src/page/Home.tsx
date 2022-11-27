import { Box } from "@mui/material";
import { Page } from "~/components";
import { HomeCart, HomeFeature, HomeGuide, HomeMain } from "~/modules/Landing";

function Home() {
  return (
    <Page title="Trang Chủ">
      <Box sx={{ backgroundColor: "#E6F0FF" }}>
        <HomeMain />
        <HomeGuide />
        <HomeCart />
        <HomeFeature />
      </Box>
    </Page>
  );
}
export default Home;

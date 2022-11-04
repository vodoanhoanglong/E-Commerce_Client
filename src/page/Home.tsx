import { Box } from "@mui/material";
import { Page } from "~/components";

import HomeFilter from "~/modules/Home/HomeProduct";
import HomeSale from "~/modules/Home/HomeSale";

function Home() {
  return (
    <Page title="trang chu">
      <Box sx={{ flexGrow: 1, textAlign: "center", m: 0 }}>
        <HomeSale />
        <HomeFilter />
      </Box>
    </Page>
  );
}
export default Home;

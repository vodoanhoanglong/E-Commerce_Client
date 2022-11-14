import { Page } from "~/components";
import HomeFeature from "~/modules/Home/HomeFeature";
import HomeInteractive from "~/modules/Home/HomeInteractive";
import HomeMain from "~/modules/Home/HomeMain";
import HomeNewProduct from "~/modules/Home/HomeNewProduct";

function Home() {
  return (
    <Page title="trang chu">
      <HomeMain />
      <HomeInteractive />
      <HomeNewProduct />
      <HomeFeature />
    </Page>
  );
}
export default Home;

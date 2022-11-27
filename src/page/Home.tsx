import { Page } from "~/components";
import { HomeCart, HomeFeature, HomeGuide, HomeMain } from "~/modules/Landing";

function Home() {
  return (
    <Page title="Trang Chủ">
      <HomeMain />
      <HomeGuide />
      <HomeCart />
      <HomeFeature />
    </Page>
  );
}
export default Home;

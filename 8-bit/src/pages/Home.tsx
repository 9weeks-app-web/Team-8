import HomePortfolio from "../components/HomePortfolio";
import HomeBanner from "../components/HomeBanner";
import HomeServices from "../components/HomeServices";

function Home() {
  return (
    <div>
      <HomeBanner />
      <HomePortfolio/>
      <HomeServices />
    </div>
  );
}

export default Home;
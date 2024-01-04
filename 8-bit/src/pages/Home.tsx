import Portfolio from "../components/Portfolio";
import HomeBanner from "../components/HomeBanner";
import HomeServices from "../components/HomeServices";

function Home() {
  return (
    <div>
      <HomeBanner />
      <Portfolio/>
      <HomeServices />
    </div>
  );
}

export default Home;
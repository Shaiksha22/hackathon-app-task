

import DiscoverChallenges from "../components/DiscoverChallenges";
import Header from "../components/Header";
import StatisticsData from "../components/StatisticsData";
import WhyParticipate from "../components/WhyParticipate";

const Home = () => {
  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{ background: "#003145" }}
    >
      <Header />
      <StatisticsData />
      <WhyParticipate />
      <DiscoverChallenges />
    </div>
  );
};

export default Home;

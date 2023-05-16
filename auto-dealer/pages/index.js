import MyCarousel from "../components/MyCarousel";
import Welcome from "../components/Welcome";
import RecentCars from "../components/RecentCars";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <MyCarousel />
      <Welcome />
      <RecentCars />
    </Layout>
  );
}

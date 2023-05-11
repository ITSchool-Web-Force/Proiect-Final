import MyNavbar from "../components/MyNavbar";
import MyCarousel from "../components/MyCarousel";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import RecentCars from "../components/RecentCars";

export default function Home() {
  return (
    <>
      <MyNavbar />
      <MyCarousel />
      <Welcome />
      <RecentCars />
      <Footer />
    </>
  );
}

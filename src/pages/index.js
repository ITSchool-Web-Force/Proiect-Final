
import Slider from "./components/slider";
import Navbar from "./components/utilites/navbar";
import Footer from "./components/utilites/footer";
import ViewProducts from "./components/viewproducts";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Footer />
      <ViewProducts />
    </div>
  );
}

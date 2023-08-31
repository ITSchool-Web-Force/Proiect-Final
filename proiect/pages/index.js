import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Explore from "@/components/Explore";
import { SliderData } from "../components/data/AboutSlider";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About slides={SliderData} />
      <Explore />
    </div>
  );
}

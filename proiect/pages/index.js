import { Navbar, About, Hero, Explore } from '../components'
import { SliderData } from '../components/AboutSlider';

export default function Home() {
  return (
    <div>
    <Navbar />
    <Hero heading='Adelin Visuals Photography'
        message='Imi place Fotografia' />
    <About slides={SliderData}/>
    <Explore />
  </div>
  );
};

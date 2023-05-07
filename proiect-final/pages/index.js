
import MyCarousel from "@/components/MyCarousel"
import Nav from "../components/Nav"
import Description from "@/components/Description"
import about from "@/pages/about"
import TabNav from "@/components/TabNav"
import Footer from "@/components/Footer"
import Product from "@/components/Product"
import App from "@/components/App"



export default function Home() {
  return <>
    <Nav />
    <MyCarousel />
    <TabNav />
    <App />
    <Footer />
  </>
}

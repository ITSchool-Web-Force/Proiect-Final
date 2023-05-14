import MyCarousel from "@/components/MyCarousel"
import Nav from "../components/Nav"
import TabNav from "@/components/TabNav"
import Footer from "@/components/Footer"
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

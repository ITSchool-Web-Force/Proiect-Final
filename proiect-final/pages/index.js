
import MyCarousel from "@/components/MyCarousel"
import Nav from "../components/Nav"
import Description from "@/components/Description"
import about from "@/pages/about"
import TabNav from "@/components/TabNav"
import Footer from "@/components/Footer"
import Product from "@/components/Product"
import App from "@/components/App"

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>

export default function Home() {
  return <>
    <Nav />
    <MyCarousel />
    <TabNav />
    <App />
    <Footer />
  </>
}

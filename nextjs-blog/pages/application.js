import EstimatePrice from "../components/price";
import MyHeader from "../components/header.js";
import NavBar from '../components/navbar';
import Footer from '../components/footer'

export default function PriceNew () {
    return (
        <div >
            <MyHeader />
            <div>
            <NavBar />
            </div>
            <EstimatePrice />
            <Footer />
        </div>
    )
}


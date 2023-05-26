import { ShoppingCartContextProvider } from "@/context/ShoppingCartContext";
import ProductGroup from "./ProductGroup";
import data from "./data";
import Cart from "./Cart";

export default function App() {
    const {products} = data;
    return <>
        <ShoppingCartContextProvider>
            <div>
                <ProductGroup 
                    products={products} 
                />
                <Cart
                    products={products} 
                />
            </div>
        </ShoppingCartContextProvider>
    </>
}

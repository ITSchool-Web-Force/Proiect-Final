import ProductGroup from "./ProductGroup";
import data from "./data";


export default function App() {
    const {products} = data;
    return <>
        <div>
            <ProductGroup 
                products={products}>
            </ProductGroup>
        </div>
    </>
}

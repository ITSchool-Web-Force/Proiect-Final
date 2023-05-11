import style from "../styles/ProductGroup.module.css"
import Product from "../components/Product"
import App from "./App";

export default function ProductGroup(props) {
  const {addProducts, deleteProducts, products, cartItems} = props; 
  
    return <>
        <h2 className={style.title_products}>Our bouquets</h2>
        <div className={style.product_list}>
          {products.map((product) => (
            <Product key={product.id} className={style.product}
              product={product} 
              basket_image={product.basket_image}
              addProducts={addProducts}
              deleteProducts={deleteProducts}>
            </Product>
          ))}
        </div>
    </>
  }
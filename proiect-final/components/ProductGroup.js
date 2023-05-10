import style from "../styles/ProductGroup.module.css"
import Image from "next/image";
import Product from "../components/Product"
import ShoppingCart from "./ShoppingCart";
import App from "./App";

export default function ProductGroup(props) {
  const {addProducts, deleteProducts, products, cartItems} = props; 
  
    return <>
        <h2 className={style.title_products}>Our bouquets</h2>
        <div className={style.product_list}>
          {products.map((product) => (
            <Product key={product.id} className={style.product}
              product={product} 
              name={product.name} 
              price={product.price} 
              image={product.image} 
              basket_image={product.basket_image}
              cartItems={cartItems}
              addProducts={addProducts}
              deleteProducts={deleteProducts}>
            </Product>
          ))}
        </div>
    </>
  }
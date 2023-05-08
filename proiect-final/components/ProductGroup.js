import style from "../styles/ProductGroup.module.css"
import Image from "next/image";
import data from "./data";
import Product from "../components/Product"

export default function ProductGroup({addProducts, deleteProducts, cartItems}) {
   const { products } = data;
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
              item={cartItems.find((x)=> x.id === product.id)}
              addProducts={addProducts}
              deleteProducts={deleteProducts}>
            </Product>
          ))}
        </div>
    </>
  }
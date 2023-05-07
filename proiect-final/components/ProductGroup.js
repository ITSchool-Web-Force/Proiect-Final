import Product from "./Product";
import style from "../styles/ProductGroup.module.css"
import Image from "next/image";
import data from "./Data";

export default function ProductGroup({onAdd}) {
   const { products } = data;
    return <>
      <main>
        <h2 className={style.title_products}>Our bouquets</h2>
        <div className={style.product_list}>
          {products.map((product) => (
            <Product key={product.id} className={style.product}
              product={product} 
              name={product.name} 
              price={product.price} 
              image={product.image} 
              basket_image={product.basket_image}
              onAdd={onAdd}>
            </Product>
          ))}
        </div>
      </main>
    </>
  }
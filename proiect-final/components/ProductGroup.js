import style from "../styles/ProductGroup.module.css"
import Product from "./Product"


export default function ProductGroup({products}) { 
  return <>
    <h2 className={style.title_products}>Our bouquets</h2>
    <div className={style.product_list}>
      {products.map((product) => (
        <Product key={product.id} className={style.product}
          product={product}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}>
        </Product>
      ))}
    </div>
  </>
}
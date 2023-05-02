import Product from "./Product";
import style from "../styles/Main.module.css"
import Image from "next/image";


export default function Main(props) {
    const { products, onAdd } = props;
    return (
      <main>
        <h2 className={style.title_products}>Our bouquets</h2>
        <div className={style.product_list}>
          {products.map((product) => (
            <Product key={product.id} className={style.product}
              product={product} 
              name={product.name} 
              price={product.price} 
              image={product.image} 
              onAdd={onAdd}>
            </Product>
          ))}
        </div>
      </main>
    );
  }
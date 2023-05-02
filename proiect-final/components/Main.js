import Product from "./Product";
import style from "../styles/Main.module.css"


export default function Main(props) {
    const { products, onAdd } = props;
    return (
      <main>
        <h2 className={style.title_b}>Our bouquets</h2>
        <div className={style.product_style}>
          {products.map((product) => (
            <Product key={product.id} 
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
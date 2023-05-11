import style from "../styles/ProductGroup.module.css"
import Product from "../components/Product"


export default function ProductGroup(props) {
  const {products} = props; 
   
  return <>
      <h2 className={style.title_products}>Our bouquets</h2>
      <div className={style.product_list}>
        {products.map((product) => (
          <Product key={product.id} className={style.product}
            product={product}>
          </Product>
        ))}
      </div>
    </>
  }
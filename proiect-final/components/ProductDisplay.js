import Product from "./Product";
import data from "./data"
import style from "../styles/ProductDisplay.module.css"

export default function ProductDisplay() {
    const {products} = data;
    return <> 
        <div className={style.productdiv}>
        {products.map((product) => (
            <div className={style.image_display} key={product.id}>
                <div className={style.row}>
                    <h2 className={style.image_name}>{product.name}</h2>
                    <h2 className={style.image_price}>{product.price}</h2>
                    <img className={style.basket_image_properties} src={product.basket_image}/>
                </div>
                <img className={style.image_properties} src={product.image}/>
            </div>
        ))}
    <Product product={{value:"id", value:"name", value:"price", image:"image"}}/>
    </div>
    </>
}


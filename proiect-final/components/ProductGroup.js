import style from "../styles/ProductGroup.module.css"
import Image from "next/image";
import data from "./data";

export default function ProductGroup({onAdd}) {
   const { products } = data;
    return <>
        <h2 className={style.title_products}>Our bouquets</h2>
        <div className={style.product_list}>
          {products.map((product) => (
            // eslint-disable-next-line react/jsx-key
            <div className={style.product_list}>
              <div key={product.id} className={style.prod}> 
                    <div className={style.name_price}>
                        <div className={style.product_name}>{product.name}</div>
                        <div className={style.product_price}>{product.price}$</div>
                        <button className={style.mybutton}
                            onClick={() => onAdd(product)}
                        >
                            <Image className={style.basket_image_size} src={product.basket_image} width={250} height={250} alt="image">
                            </Image>
                        </button>
                    </div>
                    <Image className={style.image_size} src={product.image} width={250} height={250} alt="image">
                    </Image>
                </div>
            </div>   
          ))}
        </div>
    </>
  }
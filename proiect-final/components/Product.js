
import { useState, Fragment } from "react"
import style from "../styles/Product.module.css"
import shopping_cart from "../pages/shopping_cart"
import data from "./data";
import Image from "next/image";


export default function Product() {
    const [counter, setCounter] = useState(0);
    const {products} = data;
    
    return <>
    <div className={style.product_container}>
        {products.map((product) => <Fragment key={product.id}>
            <div className={style.prod}>
                <div className={style.name_price}>
                    <div className={style.product_name}>{product.name}</div>
                    <div className={style.product_price}>{product.price}$</div>
                </div>
            
                    <Image className={style.image_size} src={product.image} width={300} height={300} alt="image">
                    </Image>
                
                <div className={style.button_counter}>
                    <button className={style.button}
                        onClick={() => setCounter(counter+1)
                        }
                    >
                        Add product
                    </button>
                    <div>{counter}</div>
                </div>
            </div>
        </Fragment>
         )}
     </div>
    </>
    console.log("product.image");
}


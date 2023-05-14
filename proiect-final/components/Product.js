import style from "../styles/Product.module.css"
import Image from "next/image";
import { ShoppingCartContext } from "@/context/ShoppingCartContext";
import { useContext } from "react";

export default function Product ({id, price, name, image}) {
  const{addProducts, cartItems} = useContext(ShoppingCartContext);
  const cartItemsAmount = cartItems[id];
  
    return <>
      <div className={style.product_container}>
        <div className={style.prod}>
          <div className={style.name_price}>
          <div className={style.product_name}></div>
            <div className={style.product_name}>{name}</div>
            <div className={style.product_price}>{price}$</div>
          </div>
          <Image className={style.image_size} src={image} width={250} height={250} alt="image">
          </Image>
          <button onClick={() => (addProducts(id))}   className={style.add_remove_button}>
            Add {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
          </button>   
        </div>         
      </div>
    </>
}
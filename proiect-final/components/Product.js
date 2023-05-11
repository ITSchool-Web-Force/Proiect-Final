import { useState, Fragment } from "react"
import style from "../styles/Product.module.css"
import Image from "next/image";


export default function Product(props) {
  const {product, addProducts, deleteProducts, name, image, price, basket_image, item} = props;
    return (
      <div className={style.product_container}>
        <div className={style.prod}>
          <div className={style.name_price}>
            <div className={style.product_name}>{name}</div>
            <div className={style.product_price}>{price}$</div>
          </div>
          <Image className={style.image_size} src={image} width={250} height={250} alt="image">
          </Image>
          <div className={style.product_quantity_add_remove}>
          </div>   
        </div>         
      </div>
    );
}
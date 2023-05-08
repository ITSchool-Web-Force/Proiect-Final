
import { useState, Fragment } from "react"
import style from "../styles/Product.module.css"
import data from "./data";
import Image from "next/image";


export default function Product({product, addProducts, deleteProducts, name, image, price, basket_image, item}) {
    
    return <>
        <div className={style.product_container}>
            <div className={style.prod}>
                <div className={style.name_price}>
                    <div className={style.product_name}>{name}</div>
                    <div className={style.product_price}>{price}$</div>
                </div>
                <Image className={style.image_size} src={image} width={250} height={250} alt="image">
                </Image>
                <div className={style.product_quantity_add_remove}>
                      {item && (
                        <div className={style.prod_quantity}>
                          <button onClick={() => deleteProducts(item)} className={style.button_add_remove} >
                            -
                          </button>
                          <span className={style.product_span}>{item.qty}</span>
                          <button onClick={() => addProducts(item)} className={style.button_add_remove}>
                            +
                          </button>
                        </div>
                      )}
                      {!item && (
                        <button className={style.mybutton} onClick={() => addProducts(product)}>
                          <Image className={style.basket_image_size} src={basket_image} width={250} height={250} alt="image">
                          </Image>
                        </button>
                      )}
                  </div>
                
            </div>
        </div>
    </>
}
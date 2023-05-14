import style from "../styles/Product.module.css"
import Image from "next/image";

export default function Product (props) {
  const {product} = props;
    return <>
      <div className={style.product_container}>
        <div className={style.prod}>
          <div className={style.name_price}>
          <div className={style.product_name}></div>
            <div className={style.product_name}>{product.name}</div>
            <div className={style.product_price}>{product.price}$</div>
          </div>
          <Image className={style.image_size} src={product.image} width={250} height={250} alt="image">
          </Image>
          <div className={style.product_quantity_add_remove}>
          </div>   
        </div>         
      </div>
    </>
}
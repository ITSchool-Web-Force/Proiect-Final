import Link from "next/link";
import style from "./viewproducts.module.css";

export default function ViewProducts() {
  return <button className={style.button}>
   <Link href="./products" className={style.text}>View more products</Link> 
    </button>;
}

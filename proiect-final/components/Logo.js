import style from "../styles/Logo.module.css"
import logo from "../images/logo.png"
import Image from "next/image";

export default function Logo() {
    
    return <>
    <Image
          className={style.logo}
          src={logo.src}
          alt="logo image"
          width={500}
          height={300}
        />
    </>
}
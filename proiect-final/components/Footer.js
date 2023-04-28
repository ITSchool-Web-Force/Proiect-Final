import style from "../styles/Footer.module.css"


export default function Footer() {
  return <>
    <div className={style.footer}>
      <div className={style.footer_text}> © Copyright 2023 FLOWER SHOP
      <div id={style.footer_contact}>
        <p>flowershop@gmail.com</p>
      </div>
      </div>
    </div>
  </>
};
import style from "../styles/Footer.module.css"


export default function Footer() {
  return <>
    <div className={style.footer}>
      <div> © Copyright 2023 
            designed with <span className={style.heart}>&#10084;</span> by Diana
      </div>
      <p>flowershop@gmail.com</p>
    </div>
  </>
};
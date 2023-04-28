
import style from "../styles/MyButton.module.css"
import Link from 'next/link';

export default function MyButton({ mybutton }) {
    return <>
        <Link href={mybutton.link} 
        className={style.nav_button}>
            {mybutton.value}        
        </Link>
    </>
}
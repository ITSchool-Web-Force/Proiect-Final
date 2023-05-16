import Link from 'next/link';
import styles from '../styles/Home.module.css';

 
 export default function NavBar() {
    return (
    <div >
        <nav className={styles.navigation}>
            <Link href="/">
                Acasă
            </Link>
            <Link href="/form">
                Traduceri online
            </Link>
            <Link href="/contactinfo">
                Contact
            </Link>
        </nav>
    </div>
    )
}

   

  
   
   
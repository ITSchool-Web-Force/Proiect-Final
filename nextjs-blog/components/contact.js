import styles from '../styles/Home.module.css';
import Image from 'next/image';
import icon from '../public/icon.jpg';


export default function ContactInformation() {
    return ( 
    <div id="contact"className={styles.contact} >
        <h1>Contact</h1>
        <p className={styles.contactboxes}>Str. Traduceri nr. 5, Timisoara, Timis </p>
        <p className={styles.contactboxes}> Tel: +407500500 
       <br></br> Email: traduceri@gmail.com 
        <br></br> Social: Traduceri Legale Ro</p>
       <div >      
       <Image className={styles.contact}
        src={icon}
        width={300}
        height={300}
        alt="Translation Icon"/>  
        </div>  
    </div>

    )
}
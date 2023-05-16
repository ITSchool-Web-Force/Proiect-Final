import styles from '../styles/Home.module.css';
import Link from 'next/link';


export default function TypesTranslation () {
    return (
    <div className={styles.translation}>
        <h1>Servicii</h1>
        <p>Traducem orice text din orice limbă cu traducători nativi și specialiști lingviști, respectând standardele internaționale din domeniu pentru rezultate ideale.</p>
        <Link href="/form" className={styles.button}>
                Cotație online
        </Link>
        <div className={styles.services}>
        <div className={styles.boxes}>
            <p>Traduceri din orice domeniu</p><br></br>
            <p>Lucrăm cu peste 2.000 de traducători din toate colțurile lumii. Grație acestora, acoperim o gamă variată de discipline, oferind atât traduceri cât și servicii auxiliare.</p>
        </div>
        <div className={styles.boxes}>
            <p>Interpretariat</p><br></br>
            <p>Oferim timp adițional pentru interpretări consecutive, dar și autorizații emise de autorități pentru interpretări notariale.</p>
        </div>
        <div className={styles.boxes}>
            <p>Traduceri autorizate</p><br></br>
            <p>Traduceri efectuate doar de către un traducător autorizat de Ministerul Justiţiei și care se autorizează prin semnarea și ștampilarea documentului tradus de către traducătorul autorizat.</p>
        </div>
        </div>
    </div>
    )
}
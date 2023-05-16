import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function MyJobs() {
    return ( 
    <div className={styles.jobs}>
        <h1>Cariera</h1>
        <h2> Haide să colaborăm!</h2>
        <p>Suntem în mod constant în căutarea unor traducători colaboratori implicați, specialiști în diverse domenii, care au afinitate pentru limbile străine, experiență de minim 5 ani în domeniul traducerilor, știu să folosească CAT tools de actualitate, respectă termenele și își doresc o colaborare pe termen lung.</p>
        <p>Lucrăm atât cu oamenii noștri cât și cu freelanceri. Pentru mai multe detalii, completeaza formularul:</p>
        <Link href="/contactinfo" >
            <p className={styles.button}>Aplică</p>
        </Link>
    </div>
    )
}
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Traduceri</title>
      </Head>
      <main>
        <h1 className={styles.title}>Traduceri profesionale</h1>
          <p>Traduceri simple / autorizate.
              Traduceri legalizate.
              Interpretariat.</p>
        <div className={styles.grid}>
            <h1>Servicii</h1>
            <p>Prin interpretariat, un translator poate traduce în timp real discursul tău pe care îl prezinți la o conferință, training, webinar sau orice alt eveniment.</p>
            <h2>Traduceri legalizate</h2>
            <p>Traducem orice text din orice limbă cu traducători nativi și specialiști lingviști, respectând standardele internaționale din domeniu pentru rezultate ideale.</p>
            <h2>Traduceri simple / autorizate</h2>
        </div>
        <div>
          <h1>Domenii de specialitate</h1>
            <li>
                <ul>Traduceri Medicale</ul>
                <ul>Traduceri Juridice</ul>
                <ul>Traduceri Automotive</ul>
                <ul>Traduceri Financiar / Bancar</ul>
                <ul>Traduceri Marketing / Publicitate</ul>
            </li>
        </div>
        <div>
          <h1> Haide să colaborăm!</h1>
            <p>Lucrăm atât cu oamenii noștri cât și cu freelanceri!</p>
        </div>
        <div>
          <h1>Contactează-ne!</h1>
            <p>Str. Traduceri nr. 5
                Timisoara, Timis
                3007000
            </p>
            <p> Tel: +407500500
                Email: traduceri@gmail.com
                Social: Traduceri Legale Ro
            </p>
        </div>
      </main>
    </div>
  )
}

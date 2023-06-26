import styles from '../styles/container/notFound.module.scss';
import Head from 'next/head'

function notFound() {
    return <>
        <Head>
            <title>Adaugă o expresie</title>
        </Head>
        <div className={styles.content}>
            <div className={styles.notFound}>
                <h1>Pagina căutată nu există</h1> 
            </div>
        </div>
    </>
}

export default notFound
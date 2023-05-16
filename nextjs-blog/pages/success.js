import MyHeader from '../components/header';
import NavBar from '../components/navbar';
import Footer from '../components/footer'
import Link from 'next/link';
import styles from '../styles/Home.module.css';


export default function SuccesPage () {
    return (
        <div>
            <MyHeader />
            <NavBar />
            <div className={styles.success}>
                <p>Mulţumim pentru aplicare! </p>
                <Link href="/">
                    Pagina principală
                </Link>
            </div>
            <Footer />
        </div>
    );
}
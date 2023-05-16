import styles from '../styles/Home.module.css';
import NavBar from '../components/navbar';

export default function Footer() {
    return (
        <div>
            <NavBar /> 
        <footer className={styles.footer}>
            &copy; J.C. Translation 2023 - Toate drepturile sunt rezervate.
        </footer>
    </div>
    )
}
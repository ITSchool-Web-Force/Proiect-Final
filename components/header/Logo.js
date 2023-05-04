import styles from "../../styles/header/logo.module.scss";
import LogoSvg from "../../svgs/logo";

function Logo() {
    return <>
        <a href="/" className={styles.logo}>
            <LogoSvg/>
        </a>
    </>
}
    
export { Logo }
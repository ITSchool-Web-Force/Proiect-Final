import { Logo } from "../components/header/Logo";
import { Navbar } from "../components/header/Navbar";
import { SearchForm } from "../components/header/SearchForm";
import { ThemeSwitch } from "../components/header/ThemeSwitch";

import styles from "../styles/header/header.module.scss";

function Header() {
    return <>
          <header className={styles.theheader}>
            <div className={styles.wrapper}>
                <Logo/>
                <SearchForm/>
                <Navbar/>
                <ThemeSwitch/>
            </div>     
          </header>
    </>
}
    
export { Header }
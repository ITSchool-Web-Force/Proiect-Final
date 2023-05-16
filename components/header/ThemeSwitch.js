import { useTheme } from "next-themes";

import Switch from "react-switch";
import NoSSRWrapper from "../NoSSRWrapper"

import Darkmode from "../../svgs/dark";
import Lightmode from "../../svgs/light";

import styles from "../../styles/header/switcher.module.scss";

function ThemeSwitch() {
    const { theme, setTheme } = useTheme();
    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return <> 
        <NoSSRWrapper>
            <div className={styles.toggleButton}>
                <label className={styles.lala}> 
                    <Switch 
                        onChange={toggle} 
                        checked={theme === 'light'} 
                        offColor="#000" 
                        onColor="#fff" 
                        offHandleColor="#fff" 
                        onHandleColor="#000" 
                        uncheckedHandleIcon={<Darkmode/>}
                        checkedHandleIcon={<Lightmode/>}
                        uncheckedIcon={null} 
                        checkedIcon={null} 
                    />
                </label>
            </div>
        </NoSSRWrapper>
    </>
}

export { ThemeSwitch }
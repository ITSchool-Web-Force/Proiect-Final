import { useTheme } from "next-themes";

import { useEffect } from "react";

import Switch from "react-switch";
import NoSSRWrapper from "../NoSSRWrapper"

import Darkmode from "../../svgs/dark";
import Lightmode from "../../svgs/light";

import styles from "../../styles/header/switcher.module.scss";

function ThemeSwitch() {
    
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (theme === "system" && typeof window !== "undefined") {
            setTheme(prefersDarkTheme ? "dark" : "light");
        }
    }, [theme, setTheme]);

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

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
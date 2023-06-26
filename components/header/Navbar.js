import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from 'next/router';

import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

import styles from "../../styles/header/navbar.module.scss";
import MenuSvg from "../../svgs/menu";

function Navbar() {

    const router = useRouter();
    const isLogged = useUser();
    const supabaseClient = useSupabaseClient();

    const [showNav, setShowNav] = useState(false);

    const show = () => {
        setShowNav(!showNav);
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            setShowNav(false);
        });

        return () => {
            window.removeEventListener('resize', () => {
                setShowNav(false);
            })
        };
    }, []);
    
    useEffect(() => {
        if(showNav === true){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'unset';
        }
    }, [showNav]);

    function signOut() {
        supabaseClient.auth.signOut()
    }

    return <>
        <div className={`${styles.navbar} ${showNav ? `${styles.show}` : ""}`}>
            <div className={styles.closeNav}><button onClick={show}>X</button></div>
                <nav>
                    <ul>
                        <li><a href="/">Acasă</a></li>
                        <li><a href="/add">Adaugă</a></li>
                        {!isLogged && <li><a href="/auth">Logare</a></li>}
                        {!isLogged && <li><a href="/reg">Inregistrare</a></li>}
                        {isLogged && <li><a onClick={signOut}>Delogare</a></li>}
                    </ul>
                </nav>
        </div>
        <div className={styles.menuBar} onClick={show}>
            <MenuSvg/>
        </div>
    </>
}
    
export { Navbar }
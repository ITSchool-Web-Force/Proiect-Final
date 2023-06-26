import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

import { useState } from 'react';

import { ThemeProvider } from "next-themes";
import { Header } from "../sections/Header";
import { Sidebar } from "../sections/Sidebar";
import { Footer } from "../sections/Footer";

import styles from "../styles/container/container.module.scss";

import "../styles/base.css";

export default function MyApp({ Component, pageProps }) {

    const [supabaseClient] = useState(() => createBrowserSupabaseClient())

    return <> 
        <SessionContextProvider
            supabaseClient={supabaseClient}
            initialSession={pageProps.initialSession}
        >
            <ThemeProvider>
                <Header/>
                <div className={styles.container}>
                    <Component {...pageProps} />
                    <Sidebar/>
                </div>
                <Footer/>
            </ThemeProvider>
        </SessionContextProvider>
    </>
}
import Head from 'next/head'
import { useRouter } from 'next/router';

import { useState } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

import { Modal } from '../components/container/modal';

import styles from '../styles/container/auth.module.scss';

function Auth() {

    const isLogged = useUser();
    const supabaseClient = useSupabaseClient();

    const router = useRouter();

    const [show, setShow] = useState(false);
    const [theError, setTheError] = useState(false);

    const [justLogged, setJustLogged] = useState(false);

    if(isLogged && !justLogged) {
        router.push('/');
    }

    const [input, setInput] = useState({
        email: '',
        password: ''
    });

    function onInputChange (e) {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(e) {

        e.preventDefault();

        const { error } = await supabaseClient.auth.signInWithPassword({
            email: input.email,
            password: input.password
        })
    
        if (error) {
            console.log(error);
            setTheError(true);
            setTimeout(() => {
                setTheError(false);
            }, 3000);
        } else {
            setShow(true);
            setJustLogged(true);
            setTimeout(() => {
                setShow(false);
            }, 3000);
            setTimeout(() => {
                router.push('/');
            }, 3500);
        }
    }

    return <>
        <Head>
            <title>Logare</title>
        </Head>
        <div className={styles.content}>
            <div className={styles.loginPage}>
                <h2>Autentifică-te</h2> 
                <form 
                    onSubmit={handleSubmit}
                    className={styles.loginForm}
                >
                    <label htmlFor="email"><b>Adresa de email</b></label>
                    <input 
                        name="email" 
                        type="email" 
                        placeholder="Introdu adresa de email" 
                        required
                        onChange={onInputChange}
                    />
                
                    <label htmlFor="password"><b>Parolă</b></label>
                    <input 
                        name="password" 
                        type="password" 
                        placeholder="Introdu parola contului" 
                        required
                        onChange={onInputChange}
                    />
                    
                    <div className={styles.loginPassword}>
                        <button type="submit">Login</button>      
                        <a className={styles.forgotPassword} href="/forgot">Ai uitat parola?</a>
                    </div>
                </form>
                {show && ( 
                    <Modal message={'Ai fost logat cu succes. Vei fi redirecționat către prima pagină'} status='succes'/>
                )}
                {theError && ( 
                    <Modal message={'A apărut o eroare'} status='fail'/>
                )}
            </div>
        </div>
    </>
}
  
export default Auth
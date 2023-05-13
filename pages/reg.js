import Head from 'next/head'

import { Modal } from '../components/container/Modal';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

import { useState } from 'react';
import { useRouter } from 'next/router';

import styles from '../styles/container/reg.module.scss';

function Reg() {

    const isLogged = useUser();
    const router = useRouter();

    const supabaseClient = useSupabaseClient();

    const [show, setShow] = useState(false);
    const [theError, setTheError] = useState(false);

    const [alert, setAlert] = useState(false);

    if(isLogged) {
        router.push('/');
    }

    const [input, setInput] = useState({
        username: '',
        email: '',
        password: ''
    });
    
    async function handleSubmit(e) {
        e.preventDefault();

        const { error } = await supabaseClient.auth.signUp(
            {
              email: input.email,
              password: input.password,
              options: {
                data: {
                  username: input.username
                }
              }
            }
        )
    
        if (error) {
            console.log(error);
            setTheError(true);
            setTimeout(() => {
                setTheError(false);
            }, 3000);
        } else {
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 3000);
        }
    }

    function onInputChange (e) {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));

        if (name === "username") {
            if(!value.match(/^[a-zA-Z]+$/)) {
                setAlert(true);
            } else {
                setAlert(false);
            }
        }
    }

    return <>
        <Head>
            <title>Înregistrare</title>
        </Head>
        <div className={styles.content}>
            <div className={styles.registerPage}>
                <h2>Înregistrează-te</h2>

                <div className={`${styles.info} ${ alert ? styles.infoAlert : ""}`}>
                    *Numele de utilizator poate fi format doar din litere.
                </div>

                <form 
                    onSubmit={handleSubmit}
                    className={styles.registerForm}
                >
                    <label htmlFor="username">Nume de utilizator</label>
                    <input 
                        name="username" 
                        type="text" 
                        placeholder="Introdu numele de utilizator" 
                        required
                        minLength={5} 
                        maxLength={18}
                        pattern="[a-zA-Z]+"
                        onChange={onInputChange}
                    />

                    <label htmlFor="email">Email</label>
                    <input 
                        name="email" 
                        type="email" 
                        placeholder="Introdu adresa de email" 
                        required
                        minLength={5} 
                        maxLength={60}
                        onChange={onInputChange}
                    />

                    <label htmlFor="password">Parolă</label>
                    <input 
                        name="password" 
                        type="password" 
                        placeholder="Introdu parola" 
                        required
                        minLength={5}
                        maxLength={20} 
                        onChange={onInputChange}
                    />
                    
                    <button type="submit">Creează Cont</button>      
                </form>

                <div className={styles.login}>
                    <h2>Ai deja cont?</h2>
                    <a href="/reg" className={styles.loginButton}>Loghează-te</a>
                </div>

                {show && ( 
                    <Modal message={'Contul a fost create cu succes. Verifică-ți email-ul pentru a confirma contul.'} status='succes'/>
                )}
                {theError && ( 
                    <Modal message={'A apărut o eroare'} status='fail'/>
                )}
            </div>
        </div>
    </>
}
  
export default Reg

import Head from 'next/head'

import { Modal } from '../components/container/modal';
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
    }

    return <>
        <Head>
            <title>Înregistrare</title>
        </Head>
        <div className={styles.content}>
            <div className={styles.registerPage}>
                <h2>Înregistrează-te</h2>
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
                        onChange={onInputChange}
                    />

                    <label htmlFor="email">Email</label>
                    <input 
                        name="email" 
                        type="email" 
                        placeholder="Introdu adresa de email" 
                        required
                        onChange={onInputChange}
                    />

                    <label htmlFor="password">Parolă</label>
                    <input 
                        name="password" 
                        type="password" 
                        placeholder="Introdu parola" 
                        required
                        onChange={onInputChange}
                    />
                    
                    <button type="submit">Creează Cont</button>      
                </form>
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
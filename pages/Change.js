import Head from "next/head"; 

import { useRouter } from 'next/router';
import { useState } from 'react';

import { Modal } from '../components/container/modal';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

import styles from '../styles/container/forgot.module.scss'

function Change() {

    const isLogged = useUser();

    const [show, setShow] = useState(false);
    const [theError, setTheError] = useState(false);

    const [password, setPassword] = useState();

    const router = useRouter();

    const supabaseClient = useSupabaseClient();

    function onInputChange (e) {
        const { value } = e.target;
        setPassword(value)
    }

    async function handleSubmit(e) {

        e.preventDefault();

        const { error } = await supabaseClient.auth.updateUser({
            password: password
        })
    
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
            setTimeout(() => {
                router.push('/');
            }, 3500);
        }
    }

    return <>
        <Head>
            <title>Schimbă parola</title>
        </Head>
        <div className={styles.content}>
            <div className={styles.forgotPage}>
                <h2>Schimbă parola</h2>
                {isLogged ? (
                <form 
                    onSubmit={handleSubmit}
                    className={styles.forgotForm}
                >
                    <label htmlFor="email"><b>Parola nouă</b></label>
                    <input 
                        name="password" 
                        type="password" 
                        placeholder="Introdu noua parolă pentru contul tău" 
                        required
                        onChange={onInputChange}
                    />
                    <button type="submit">Trimite</button>   
                </form>) : (<div>Nu ai ce căuta aici</div>)}
                {show && ( 
                    <Modal message={'Parola a fost schimbată cu succes. Vei fi redirecționat către prima pagină.'} status='succes'/>
                )}
                {theError && ( 
                    <Modal message={'A apărut o eroare'} status='fail'/>
                )}
            </div>
        </div>
    </>

}


export default Change
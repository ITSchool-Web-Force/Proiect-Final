import Head from "next/head"; 

import { useState } from 'react';

import { Modal } from '../components/container/modal';
import { useSupabaseClient } from '@supabase/auth-helpers-react'

import styles from '../styles/container/forgot.module.scss'

function Forgot() {

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState();
    const [theError, setTheError] = useState(false);

    const supabaseClient = useSupabaseClient();

    function onInputChange (e) { 
        const { value } = e.target;
        setEmail(value)
    }

    async function handleSubmit(e) {

        e.preventDefault();

        console.log(email)

        const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
            redirectTo: 'https://main--shimmering-heliotrope-e80505.netlify.app/change',
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
        }
    }

    return <>

        <Head>
            <title>Resetare parolă</title>
        </Head>
        <div className={styles.content}>
            <div className={styles.forgotPage}>
                <h2>Resetare parolă</h2>
                <form 
                    onSubmit={handleSubmit}
                    className={styles.forgotForm}
                >
                    <label htmlFor="email"><b>Adresa de email</b></label>
                    <input 
                        name="email" 
                        type="email" 
                        placeholder="Introdu adresa de email a contului" 
                        required
                        onChange={onInputChange}
                    />
                    <button type="submit">Trimite</button>   
                </form>
                {show && ( 
                    <Modal message={'Urmează instrucțiunile primite pe email pentru a-ți schimba parola.'} status='succes'/>
                )}
                {theError && ( 
                    <Modal message={'A apărut o eroare'} status='fail'/>
                )}
            </div>
        </div>

    </>

}


export default Forgot
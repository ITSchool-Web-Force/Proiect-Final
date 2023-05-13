import Head from 'next/head'
import dayjs from 'dayjs';

import { useState } from 'react';
import { supabase } from '../utilities/supabase';

import { useUser } from '@supabase/auth-helpers-react'

import { Modal } from '../components/container/Modal';

import { useRouter } from 'next/router';

import styles from '../styles/container/add.module.scss';

function Add() {

    const user = useUser();
    const router = useRouter();

    const now = dayjs().format("YYYY-MM-DD | HH:mm");

    const [input, setInput] = useState({
        expression: '',
        explication: '',
        example: ''
    });

    const [valid, setValid] = useState({
        expression: true,
        explication: true,
        example: true
    });

    const [show, setShow] = useState(false);
    const [theError, setTheError] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if(!valid.expression || !valid.explication || !valid.example) {
            return;
        }

        if(user) {
            const add = await supabase
            .from('expressions')
            .insert([{
                    expression: input.expression,
                    explication: input.explication,
                    example: input.example,
                    author: user.user_metadata.username,
                    date: now,
                    user_id: user.id
            }])
        
            if (add.error) {
                console.log(add.error);
                setTheError(true);
                setTimeout(() => {
                    setTheError(false);
                }, 3000);
            } else { 
                e.target.reset();
                setShow(true);
                setTimeout(() => {
                    setShow(false);
                }, 3000);
                setTimeout(() => {
                    const expressionName = encodeURI(input.expression)
                    router.push(`/${expressionName}`);
                }, 3200);
            }
        } else {
            router.push('/auth');
        }
    }

    function onInputChange (e) {
        const { name, value } = e.target;

        const isValid = value === '' || /^[a-zA-Z0-9]+([a-zA-Z0-9\s]*)$/.test(value);

        if(isValid) {
            setInput(prev => ({
                ...prev,
                [name]: value
            }));
        }
        setValid((prev) => ({
            ...prev,
            [name]: isValid,
        }));

    }

    return <>
        <Head>
            <title>Adaugă o expresie</title>
        </Head>
        <div className={styles.content}>
            <div className={styles.addPage}>
                {!user && <div>Trebuie să fii logat pentru a adăuga o expresie</div>}
                {user && 
                    <>
                        <h2>Adaugă o expresie</h2>

                        <div className={`${styles.info} ${ valid.expression && valid.explication && valid.example ? "" : styles.infoAlert}`}>
                            *Poți folosi doar litere și cifre.
                        </div>

                        <form 
                            onSubmit={handleSubmit}
                            className={styles.addForm}
                        >

                            <label htmlFor="expression">Expresie</label>
                            <textarea 
                                name="expression" 
                                placeholder="Introdu expresia" 
                                rows={1}
                                cols={20} 
                                minLength={2}
                                maxLength={60}
                                required 
                                className={valid.expression ? '' : styles.invalid}
                                onChange={onInputChange}
                            > 
                            </textarea>
                         
                            <label htmlFor="explication">Explicație</label>
                            <textarea 
                                name="explication" 
                                placeholder="Introdu explicația" 
                                rows={2}
                                cols={50}
                                minLength={12}
                                maxLength={50}
                                required
                                className={valid.explication ? '' : styles.invalid}
                                onChange={onInputChange}
                            >
                            </textarea>

                            <label htmlFor="example">Exemplu</label>
                            <textarea 
                                name="example" 
                                placeholder="Introdu un exemplul de folosire" 
                                rows={3}
                                cols={50} 
                                minLength={7}
                                maxLength={60}
                                required
                                className={valid.example ? '' : styles.invalid}
                                onChange={onInputChange}
                            >
                            </textarea>
                            
                            <button type="submit">Trimite</button>      
                        </form>
                    </>
                }
                {show && ( 
                    <Modal message={'Expresia a fost adăugată cu succes'} status='succes'/>
                )}
                {theError && ( 
                    <Modal message={'A apărut o eroare'} status='fail'/>
                )}
            </div>
        </div>
    </>
}
  
export default Add

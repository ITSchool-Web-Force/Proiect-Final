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

    const [expression, setExpression] = useState();
    const [explication, setExplication] = useState();
    const [example, setExample] = useState();

    const [show, setShow] = useState(false);
    const [theError, setTheError] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if(user) {
            const add = await supabase
            .from('expressions')
            .insert([{
                    expression: expression,
                    explication: explication,
                    example: example,
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
                    const expressionName = encodeURI(expression)
                    router.push(`/${expressionName}`);
                }, 3200);
            }
        } else {
            router.push('/auth');
        }
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
                                pattern="^[a-zA-Z0-9]+$"
                                required 
                                onChange={(e) => setExpression(e.target.value)}
                            > 
                            </textarea>
                        
                            <label htmlFor="explication">Explicație</label>
                            <textarea 
                                name="explication" 
                                placeholder="Introdu explicația" 
                                rows={2}
                                cols={50}
                                minLength={12}
                                maxLength={80}
                                pattern="^[a-zA-Z0-9]+$"
                                required
                                onChange={(e) => setExplication(e.target.value)}
                            >
                            </textarea>

                            <label htmlFor="example">Exemplu</label>
                            <textarea 
                                name="example" 
                                placeholder="Introdu un exemplul de folosire" 
                                rows={3}
                                cols={50} 
                                minLength={15}
                                maxLength={90}
                                pattern="^[a-zA-Z0-9]+$"
                                required
                                onChange={(e) => setExample(e.target.value)}
                            >
                            </textarea>
                            
                            <button type="submit">Trimite</button>      
                        </form>
                        <div>*Poți folosi doar litere și cifre.</div>
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

import Head from 'next/head'

import { useState } from 'react';
import { supabase } from '../utilities/supabase';

import { useUser } from '@supabase/auth-helpers-react'

import { Modal } from '../components/container/Modal';

import { useRouter } from 'next/router';

import styles from '../styles/container/add.module.scss';

function Add() {

    const user = useUser();
    const router = useRouter();

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    const months = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"]
    
    const theMonth = months[month - 1]

    const theDate = `${date} ${theMonth} ${year}`

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
                    author: user.user_metadata.user_name,
                    date: theDate,
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
                                required
                                onChange={(e) => setExample(e.target.value)}
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

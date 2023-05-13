import Head from 'next/head'
import { supabase } from '../../utilities/supabase';

import { useState, useEffect, useRef } from 'react';

import { Modal } from '../../components/container/Modal';

import { ThreeDots  } from  'react-loader-spinner'

import { ExpressionCard } from '../../components/container/index/ExpressionCard';

import styles from '../../styles/container/account.module.scss';

function Username(props) {

    const username = props.data.username;
    const id = props.data.id;

    const HowMany = 5;

    const [loading, setLoading] = useState(true);
    const [expressions, setExpressions] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(HowMany-1);

    const [theError, setTheError] = useState(false);

    const elementRef = useRef(null);

    if(props.error) {
        setTheError(true)
    }
  
    function onIntersection(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting && hasMore) {
                setFrom((from) => from + HowMany);
                setTo((to) => to + HowMany);
            }
        });
    }

    useEffect(() => {
        const observer = new IntersectionObserver(onIntersection);

        if (observer && elementRef.current && hasMore ) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [elementRef.current]);  

    useEffect(() => {
            getData();
    }, [from, to]);

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    async function getData() {
        if (hasMore) {
            setLoading(true);
        }

        await delay(500);
  
        const { data, error } = await supabase
            .from('expressions')
            .select()
            .range(from, to)
            .order('date',  {ascending: false} )

        if (error) {
            setTheError(true)
        }
  
        if (data.length === 0) {
            setHasMore(false);
            setLoading(false);
        } else {
            setExpressions((prevExpressions) => [...prevExpressions, ...data]);
            setLoading(false);
        }
    }

    return <>
        <Head>
            <title>{username}</title>
        </Head>
        <div className={styles.content}>
            <div className={styles.accountPage}>
                <h2>Expresile adăugate de {username}</h2>
                <div className={styles.expressionsList}>
                    {expressions && (expressions.map((expression) => (
                    <ExpressionCard expressionData={expression} id={id} key={expression.id} showAuthor='false' />
                    )))}
                    {loading && ( 
                        <ThreeDots 
                            height="60" 
                            width="60" 
                            radius="9"
                            color="var(--text-color)" 
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                    )}
                    {!hasMore && (
                        <div className={styles.end}>
                            Astea au fost
                        </div>
                    )}
                    {hasMore && (
                        <span 
                            style={{visibility:'hidden'}} 
                            ref={elementRef}
                        >
                        </span>     
                    )}
                    {theError && ( 
                        <Modal message={'A apărut o eroare'} status='fail'/>
                    )}
                </div>
            </div>
        </div>
    </>
}

export async function getServerSideProps({params}) {
    const { username } = params;

    const { data, error } = await supabase
    .from("users")
    .select()
    .eq('username', username)
    .single()

    if(error) {
        console.log(error);
    }

    return {
        props: { 
            data, 
            error
        }
    }
}
  
export default Username

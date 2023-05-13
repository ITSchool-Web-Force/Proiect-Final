import Head from 'next/head'

import { useState } from 'react';

import { Modal } from '../components/container/Modal';

import { ExpressionCard } from '../components/container/index/ExpressionCard';

import { supabase } from '../utilities/supabase';

import styles from '../styles/container/expression.module.scss';


function Expression(props) {

    const expression = props.data;
    const [theError, setTheError] = useState(false);

    if(props.error) {
        setTheError(true)
    }

    return <>
        <Head>
            <title>Ce înseamnă {expression.expression}?</title>
        </Head>
        <div className={styles.content}>
            <div className={styles.ExpressionPage}>
                <ExpressionCard expressionData={expression} key={expression.id} />
                {theError && ( 
                    <Modal message={'A apărut o eroare'} status='fail'/>
                )}
            </div>
        </div>
    </>

}


export async function getServerSideProps({params}) {
    const { expression } = params;

    const decodedExpression = decodeURI(expression)

    const { data, error } = await supabase
            .from('expressions')
            .select()
            .eq('expression', decodedExpression)
            .single()

    if (error || !data || data.length === 0) {
        return {
            notFound: true,
        };
    }

    return {
        props: { 
            data,
            error
        }
    }
}
  
export default Expression

import Head from 'next/head'

import { useEffect, useState } from 'react';

import { ExpressionCard } from '../components/container/index/expressioncard';

import { supabase } from '../utilities/supabase';

import styles from '../styles/container/expression.module.scss';


function HomePage({data}) {

    const expression = data[0];

    return <>
        <Head>
            <title></title>
        </Head>
        <div className={styles.content}>
            <div className={styles.ExpressionPage}>
                <ExpressionCard expressionData={expression} key={expression.id} />
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

        if (error) {
            console.log(error);
        }

    if (error || !data || data.length === 0) {
        return {
            notFound: true,
        };
    }

    return {
        props: { 
            data
        }
    }
}
  
export default HomePage
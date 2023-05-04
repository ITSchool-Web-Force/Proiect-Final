import Head from 'next/head'

import { useState, useEffect, useRef } from 'react';
import { supabase } from '../utilities/supabase';
import { ThreeDots  } from  'react-loader-spinner'
import { ExpressionCard } from '../components/container/index/expressioncard';

import styles from '../styles/container/content.module.scss';
import { Content } from '../sections/Content';


function HomePage(props) {

    return <>
        <Head>
            <title>Dicționar Urban</title>
        </Head>
        <Content ssrData={props.data} posts={props.HowMany}/>
    </>
}

export async function getServerSideProps(context) {

    const HowMany = 5;
    const { data, error } = await supabase
            .from('expressions')
            .select()
            .range(0, HowMany-1)
            .order('created_at',  {ascending: false} )
            ;
    return {
        props: {
            data,
            HowMany
        }
    }
}
  
export default HomePage
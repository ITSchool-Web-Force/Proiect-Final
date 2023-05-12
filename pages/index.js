import Head from 'next/head'

import { Modal } from '../components/container/Modal';
import { useState } from 'react';

import { supabase } from '../utilities/supabase';

import { Content } from '../sections/Content';

function HomePage(props) {

    const [theError, setTheError] = useState(false);

    if(props.error) {
        setTheError(true)
    }

    return <>
        <Head>
            <title>Dicționar Urban</title>
        </Head>
        <Content ssrData={props.data} posts={props.HowMany}/>
        {theError && ( 
            <Modal message={'A apărut o eroare'} status='fail'/>
        )}
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

    if (error || !data || data.length === 0) {

        return {
            notFound: true,
        };
    }

    return {
        props: {
            data,
            HowMany,
            error
        }
    }
}
  
export default HomePage

import { useState, useEffect} from 'react';
import { ExpressionWidget } from "../components/container/sidebar/expressionday";

import styles from "../styles/container/sidebar.module.scss";

function Sidebar() {

    const [expressions, setExpression] = useState([]);

    async function getData() {

        const { data, error } = await supabase
            .from('expressions')
            .select()
            .range(from, to)
            .order('created_at',  {ascending: false} )
    
        if (error) {
            throw error;
        }
    
        if (data.length === 0) {
            console.log('no more data');
        } else {
            setExpression((prevExpression) => [...prevExpression, ...data]);
        }
    }
    return <>
        <div className={styles.sidebar}>
            <ExpressionWidget/>
            <div className={styles.addExpression}>
                <h2>Poți contribui și tu la acest dicționar</h2>
                <a href="/add" className={styles.addButton}>Adaugă o expresie</a>
            </div>
        </div>
    </>
}
    
export { Sidebar }
import { supabase } from '../../utilities/supabase';

import { useState, useEffect } from "react";

import SearchSvg from "../../svgs/search";

import styles from "../../styles/header/searchform.module.scss";

function SearchForm() {

    const [value, setValue] = useState('');
    const [expressions, setExpressions] = useState([]);

    function onChange(event) {
        setValue(event.target.value);
    }

    useEffect(() => {
            getData();
    }, [value]);

    async function getData() {
        const { data, error } = await supabase
            .from('expressions')
            .select()
            .ilike('expression', `%${value}%`)
    
        if (error) {
            throw error;
        }
        if(data) {
            setExpressions(data);
        }
    }

    return <>
        <div className={styles.theSearch}>
            <form className={styles.searchForm}>
                <input type="search" value={value} onChange={onChange} className={styles.searchInput} placeholder="Caută..."/>
                <button className={styles.searchButton} disabled>
                    <SearchSvg/>
                </button>
            </form> 
            {value && (expressions.length > 0 && <div className={styles.dropdown}>
                    {expressions.map((item) => ( 
                    <div className='' key={item.expression}>
                            {item.expression}
                    </div>
                    ))}
            </div>)}
        </div>
    </>
}
    
export { SearchForm }
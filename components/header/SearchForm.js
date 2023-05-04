import { supabase } from '../../utilities/supabase';

import { useState, useEffect } from "react";

import SearchSvg from "../../svgs/search";

import styles from "../../styles/header/searchform.module.scss";

function SearchForm() {

    const [value, setValue] = useState('');
    const [expressions, setExpressions] = useState([]);

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSearch = (searchTerm, event) => {
        console.log("search ", searchTerm);
        event.preventDefault();
        setValue(searchTerm)
    }  

    /*useEffect(() => {
            getData();
    }, [value]);

    async function getData() {
        const { data, error } = await supabase
            .from('expressions')
            .select()
    
        if (error) {
            throw error;
        }

        if(data) {
            setExpressions(data);
        }
    }*/

    return <>
        <div className={styles.theSearch}>
            <form className={styles.searchForm}>
                <input type="search" value={value} onChange={onChange} className={styles.searchInput} placeholder="Caută..."/>
                <button className={styles.searchButton} disabled>
                    <SearchSvg/>
                </button>
            </form> 
            {value && <div className={styles.dropdown}>
                    {expressions.map((item) => ( 
                    <div className='' key={item.expression}>
                            {item.expression}
                    </div>
                    ))}
            </div>}
        </div>
    </>
}
    
export { SearchForm }
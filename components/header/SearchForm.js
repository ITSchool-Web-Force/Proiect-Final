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

    function getLink(expression) {
        return encodeURI(expression)
    }

    function showSummary(expression) {
        const words = expression.split(" ");
        const numWords = words.length;
        let summary = '';
        const lenght = 6;

        if(numWords > lenght) {
            for(let i=0; i < lenght; i++) {
                summary += words[i] + ' ';
            }
            return `${summary}...` 
        } else {
            return expression;
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
                        <ul key={item.expression}>
                            <a href={getLink(item.expression)}>
                                <button>
                                    <span>{item.expression}</span> =&gt; {showSummary(item.expression)}
                                </button>
                            </a>
                        </ul>
                    ))}
            </div>)}
        </div>
    </>
}
    
export { SearchForm }
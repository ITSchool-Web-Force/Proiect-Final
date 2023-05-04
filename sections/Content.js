import { useState, useEffect, useRef } from 'react';
import { supabase } from '../utilities/supabase';

import { ThreeDots  } from  'react-loader-spinner'

import { ExpressionCard } from '../components/container/index/expressioncard';

import styles from '../styles/container/content.module.scss';

function Content( { ssrData, posts } ) {

    const HowMany = posts;

    const [loading, setLoading] = useState(true);
    const [expressions, setExpressions] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    const [firstRender, setFirstRender] = useState(false);

    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(HowMany-1);
  
    const elementRef = useRef(null);
  
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
        if(!firstRender) {
            setFirstRender(true);
        } else {
            getData();
        }
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
            .order('created_at',  {ascending: false} )

        if (error) {
            console.log(error);
        }
  
        if (data.length === 0) {
            setHasMore(false);
            setLoading(false);
        } else {
            setExpressions((prevExpressions) => [...prevExpressions, ...data]);
            setLoading(false);
        }
    }
  
    return (
      <>
        <div className={styles.content}>
          <div className={styles.expressionsList}>
            {ssrData.map((expression) => (
              <ExpressionCard expressionData={expression} key={expression.id} />
            ))}
            {expressions && (expressions.map((expression) => (
              <ExpressionCard expressionData={expression} key={expression.id} />
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
          </div>
        </div>
      </>
    );
}

export { Content };
import dayjs from 'dayjs';

import { useState, useEffect } from 'react';

import { supabase } from '../../../utilities/supabase';

import { ExpressionCard } from '../../../components/container/index/ExpressionCard';

import styles from "../../../styles/container/expresionwidget.module.scss";

function ExpressionWidget() {

    const today = dayjs();
    const dayOfWeek = today.day();

    const lastSunday = today.subtract(dayOfWeek, 'day')
    const lastMonday = lastSunday.subtract(6, 'day')

    const [expressions, setExpressions] = useState([]);

    const [thePostId, setThePostId] = useState();
    const [thePostData, setThePostData] = useState();

    const days = [];
    let currentDate = lastSunday;

    while (currentDate.isAfter(lastMonday) || currentDate.isSame(lastMonday)) {
        days.unshift(currentDate);
        currentDate = currentDate.subtract(1, 'day');
    }

    const dates = days.map(date => date.format('YYYY-MM-DD'));

    async function fetchExpressions(theDay) {

        const { data, error } = await supabase
          .from('expressions')
          .select()
          .ilike('date', `%${theDay}%`);

        if (error)  {
            console.error(error);
        } 
        
        if(data.length > 0){
            for (const expression of data) {
                setExpressions(expressions => [...expressions, expression.id]);
            }    
        }
    }

    useEffect(() => {
            dates.map(date => fetchExpressions(date));
    }, []);

    async function getLikes() {

        const { data, error } = await supabase
            .from('likes')
            .select()
            .in('post_id', expressions)

        if (error)  {
            console.error(error);
        } 

        const countLikes = data.reduce((expression, like) => {
            const post_id = like.post_id;
            if (post_id in expression) {
                expression[post_id] += 1;
            } else {
                expression[post_id] = 1;
            }
            return expression;
        }, {});

        const theMostLikedExpression = (Object.entries(countLikes).sort((a, b) => b[1] - a[1]))[0][0];

        setThePostId(theMostLikedExpression)
    }

    useEffect(() => { 
        if(expressions.length > 0 ) {
            getLikes();
        }
    }, [expressions]);

    async function getPostData() {
        const { data, error } = await supabase
            .from('expressions')
            .select()
            .eq('id', thePostId)
            .single()

        if (error)  {
            console.error(error);
        } else {
            setThePostData(data);
        }
    }

    useEffect(() => { 
        if(thePostId) {
            getPostData();
        }
    }, [thePostId]);

    return <>
        <div className={styles.expressionWidget}>
            <h2>Expresia săptămânii</h2>    
            {thePostData && <ExpressionCard expressionData={thePostData} ShowLikes='false' />}
        </div>
    </>
}
    
export { ExpressionWidget }
import LikeSvg from "../../../svgs/like";
import DislikeSvg from "../../../svgs/dislike";

import styles from "../../../styles/container/expressionprofile.module.scss"

import NoSSRWrapper from "../../../components/nossr"

import { useUser } from '@supabase/auth-helpers-react'

import { useEffect, useState } from 'react';

import { supabase } from '../../../utilities/supabase';

function ExpressionCard ( {expressionData, id} ) {

    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    const [likes, setLikes] = useState(false);
    const [dislikes, setDislikes] = useState(false);

    const user = useUser(); 

    async function getLikeStatus() {

        const dataLikes = await supabase
            .from('likes')
            .select()
            .eq('user_id', id)
            .eq('post_id', expressionData.id)

        if(dataLikes.error) {
            console.log(dataLikes.error);
        }
        if(dataLikes.data.length > 0){
            setIsLiked(true);
        }

        const dataDisLikes = await supabase
            .from('dislikes')
            .select()
            .eq('user_id', id)
            .eq('post_id', expressionData.id)

        if(dataDisLikes.error) {
            console.log(dataDisLikes.error);
        }
        if(dataDisLikes.data.length > 0){
            setIsDisliked(true);
        }
    } 

    async function getLikes() {
        const dataLikes = await supabase
            .from('likes')
            .select()
            .eq('post_id', expressionData.id)

        if(dataLikes.error) {
            console.log(dataLikes.error);
        } else {
            setLikes(dataLikes.data.length)
        }

        const dataDisLikes = await supabase
            .from('dislikes')
            .select()
            .eq('post_id', expressionData.id)

        if(dataDisLikes.error) {
            console.log(dataDisLikes.error);
        } else {
            setDislikes(dataDisLikes.data.length)
        }
        
    }

    useEffect(() => {
        if(user) {
            getLikeStatus();
        }
    }, [user]);

    useEffect(() => {
            getLikes();
    }, [likes, dislikes]);

    async function handleLike(e) {
        e.preventDefault();

        if(user) {

            if(!isLiked) {

                setIsLiked(true);
                setLikes(likes + 1)

                const { error } = await supabase
                    .from('likes')
                    .insert([{
                        post_id: expressionData.id, 
                        user_id: id
                    }])

                if(error) {
                    console.log(error);
                }
            } else {
                setIsLiked(false);
                setLikes(likes - 1)

                const { error } = await supabase
                    .from('likes')
                    .delete()
                    .eq('user_id', id)
                    .eq('post_id', expressionData.id)

                if(error) {
                    console.log(error);
                }
            }
        } else {
            router.push('/auth');
        }
    }

    async function handleDislike(e) {
        e.preventDefault();

        if(user) {

            if(!isDisliked) {

                setIsDisliked(true);
                setDislikes(dislikes + 1)
        
                const { error } = await supabase
                    .from('dislikes')
                    .insert([{
                        post_id: expressionData.id, 
                        user_id: id
                    }])

                if(error) {
                    console.log(error);
                }
            } else {
                setIsDisliked(false);
                setDislikes(dislikes - 1)

                const { error } = await supabase
                    .from('dislikes')
                    .delete()
                    .eq('user_id', id)
                    .eq('post_id', expressionData.id)

                if(error) {
                    console.log(error);
                }
            }
        } else {
            router.push('/auth');
        }
    }


    return <>
        <div className={styles.expressionCard}>
                
            <div className={styles.expression}>{expressionData.expression}</div>
            <div className={styles.explication}>{expressionData.explication}</div>
            <div className={styles.example}>{expressionData.example}</div>
            <div className={styles.cardInfo}>adăugat pe
                <span className={styles.date}> {expressionData.date}</span>
            </div>
                <div className={styles.likesSystem}>
                    <NoSSRWrapper>
                        <a className={`${styles.likePart} ${ isLiked ? styles.likePartActive : ""} `} onClick={handleLike}>
                            <LikeSvg/>
                            <span className={styles.likes}>{likes}</span>
                        </a>                        
                        <a className={`${styles.dislikePart} ${ isDisliked ? styles.dislikePartActive : ""} `} onClick={handleDislike}>
                            <DislikeSvg/>
                            <span className={styles.dislikes}>{dislikes}</span>
                        </a>
                    </NoSSRWrapper>
                </div>                
        </div>
    </>
}

export { ExpressionCard }
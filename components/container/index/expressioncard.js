import LikeSvg from "../../../svgs/like";
import DislikeSvg from "../../../svgs/dislike";

import styles from "../../../styles/container/card.module.scss";

import NoSSRWrapper from "../../NoSSRWrapper"

import { useEffect, useState } from 'react';

 
import { useUser } from '@supabase/auth-helpers-react'

import { useRouter } from 'next/router';

import { supabase } from '../../../utilities/supabase';

function ExpressionCard ( {expressionData, showAuthor} ) {

    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    const [likes, setLikes] = useState(false);
    const [dislikes, setDislikes] = useState(false);

    const user = useUser();
    const router = useRouter();

    async function getLikeStatus() {

        const dataLikes = await supabase
            .from('likes')
            .select()
            .eq('user_id', user.id)
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
            .eq('user_id', user.id)
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
        getLikes();
    }, [user]);

    async function handleLike(e) {
        e.preventDefault();

        if(user) {

            if(!isLiked) {

                const { error } = await supabase
                    .from('likes')
                    .insert([{
                        post_id: expressionData.id, 
                        user_id: user.id
                    }], { returning: "minimal" })

                if(error) {
                    console.log(error);
                } else {
                    setIsLiked(true);
                    setLikes(likes + 1)
                }

                if(isDisliked) {
                    const { error } = await supabase
                        .from('dislikes')
                        .delete({ returning: "minimal" })
                        .eq('user_id', user.id)
                        .eq('post_id', expressionData.id)

                    if(error) {
                        console.log(error);
                    } else {
                        setIsDisliked(false);
                        setDislikes(dislikes - 1)
                    }
                }
            } else {
                const { error } = await supabase
                    .from('likes')
                    .delete({ returning: "minimal" })
                    .eq('user_id', user.id)
                    .eq('post_id', expressionData.id)

                if(error) {
                    console.log(error);
                } else {
                    setIsLiked(false);
                    setLikes(likes - 1)
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

                const { error } = await supabase
                    .from('dislikes')
                    .insert([{
                        post_id: expressionData.id, 
                        user_id: user.id
                    }], { returning: "minimal" })

                if(error) {
                    console.log(error);
                } else {
                    setIsDisliked(true);
                    setDislikes(dislikes + 1)
                }

                if(isLiked) {                   
                    const { error } = await supabase
                        .from('likes')
                        .delete({ returning: "minimal" })
                        .eq('user_id', user.id)
                        .eq('post_id', expressionData.id)

                    if(error) {
                        console.log(error);
                    } else {
                        setIsLiked(false);
                        setLikes(likes - 1)
                    }
                }
            } else {                
                const { error } = await supabase
                    .from('dislikes')
                    .delete({ returning: "minimal" })
                    .eq('user_id', user.id)
                    .eq('post_id', expressionData.id)

                if(error) {
                    console.log(error);
                } else {
                    setIsDisliked(false);
                    setDislikes(dislikes - 1)
                }
            }
        } else {
            router.push('/auth');
        }
    }

    function authorClick(username) {
        router.push(`/user/${username}`);
    }
    function expressionClick(data) {
        
        const expressionName = encodeURI(data)

        router.push(`/${expressionName}`);
    }

    return <>
        <div className={styles.expressionCard}>
                
            <a className={styles.expression} onClick={() => expressionClick(expressionData.expression)}>{expressionData.expression}</a>
            <div className={styles.explication}>{expressionData.explication}</div>
            <div className={styles.example}>{expressionData.example}</div>
            <div className={styles.cardInfo}>adăugat {showAuthor !== 'false' && <>de 
                <span className={styles.author} onClick={() => authorClick(expressionData.author)}> {expressionData.author} </span></>}
                pe
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
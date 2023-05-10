import classes from "./Newsfeed.module.scss";
import { FaEllipsisH, FaThumbsUp, FaComment, FaShare } from "react-icons/fa";
import CommentsSection from "./comments/CommentsSection";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import ProfileImg from '../../../assets/profileImg.jpg';
import ParisPost from '../../../assets/ParisPost.jpg'
import { Link } from "react-router-dom";
import MyProfilePic from '../../../assets/myProfilePic.png';
import Weather from "../LeftContent/Weather";

const Newsfeed = (props) => {
    //   const todaysDate = new Date('29.03.2021'); // to be used with input field to generate new comment

    const [profileOptionsVisible, setProfileOptionsVisible] = useState(false);

    const [like, setLike] = useState(props.postData.numberOfLikes);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked);
    }

    const [share, setShare] = useState(props.postData.numberOfShares);
    const [isShared, setIsShared] = useState(false);

    const shareHandler = () => {
        setShare(isShared ? share - 1 : share + 1)
        setIsShared(!isShared);
    }

    const deleteThisPost = () => {
        props.removePost(props.postData.id);
    }

    const toggleProfileState = () => {
        setProfileOptionsVisible((prevState) => {
            return !prevState;
        })
    }


    return (



        <main className={classes.containerMain}>
            <div className={classes.post}>
                <div className={classes.postContainer}>
                    <div className={classes.postTop}>
                        <div className={classes.postTopLeft}>
                            <img className={classes.postProfileImg} src={MyProfilePic} />
                            <div className={classes.topSectionSet}>
                                <span className={classes.postUsername}>{props.postData.username}</span>
                            </div>

                        </div>

                        <div onClick={toggleProfileState}
                            tabIndex="1"
                            className={classes.postTopRight}>
                            <a className={classes.postTopRightButton}>
                                < FiMoreHorizontal />
                            </a>
                            {profileOptionsVisible && (
                                <div className={classes["context-menu-dropdown"]}>
                                    <button className={classes.deleteMenu} onClick={deleteThisPost}>Delete this post ?</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <span className={classes.postDate}>5 mins ago</span>

                    <div className={classes.postCenter}>
                        <span>{props.postData.text}</span>
                        <img src={ParisPost} className={classes.postImageCenter} alt="Post image" />
                    </div>
                    <div className={classes.postBottom}>
                        <div className={classes.postBottomLeft}>
                            <div className={classes.likeShare}>
                                <Link to={'/'}>
                                    <FaThumbsUp onClick={likeHandler} />
                                    <span><span id="noOfLikes"></span>{like} Likes</span>
                                </Link>
                            </div>
                        </div>
                        <div className={classes.postBottomRight}>
                            <div className={classes.likeShare}>

                                <Link to={'/'}>
                                    < FaShare />
                                    <span><span id="noOfShares"></span>{share} Shares</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={classes.postReaction}>
                        <Link className={classes.linkAdjust} to={'/'} onClick={likeHandler}>
                            <FaThumbsUp />
                            <span>Like</span>
                        </Link>
                        <Link to={'/'} >
                            <FaComment />
                            <span>Comment </span>
                        </Link>
                        <Link to={'/'} onClick={shareHandler}>

                            <FaShare />
                            <span>Share</span>
                        </Link>
                    </div>
                    <div className={classes.commentBoxContainer}>
                        <div className={classes.commentContent}>
                            <input type="text" placeholder="Introduceti comentariul aici..." />
                        </div>
                        {props.postData.comments.map((comment) => {
                            return (<CommentsSection commentData={comment}></CommentsSection>)
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Newsfeed;
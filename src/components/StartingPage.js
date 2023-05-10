import classes from "./StartingPage.module.scss";
import LeftContent from "./StartingPage/LeftContent/LeftContent"; // ./ in acelasi folder
import Newsfeed from "./StartingPage/NewsFeed/NewsFeed";
import { useState } from "react";
import RightContent from "./StartingPage/RightContent/RightContent";
import usePost from "./hooks/use-post";
import SharePost from "./StartingPage/NewsFeed/SharePost";

const POST_DATA = [
    {
        id: 0,
        username: "Tavi",
        postDate: "20/07/2022",
        numberOfLikes: 45,
        numberOfShares: 12,

        photo: '../assets/Ad.png',
        text: "This is my new dynamic post",
        comments: [
            {
                username: "Alex",
                date: "21/01/2021",
                postTime: "5 mins ago",
                comment: "This is my first dynamic content",
            },
            {
                username: "Mihai",
                date: "22/01/2021",
                comment: "This is my second dynamic content",
            },
        ],
    },
    {
        id: 1,
        username: "Andrei",
        postDate: "20/07/2022",
        numberOfLikes: 45,
        numberOfShares: 12,

        postTime: "25 mins ago",
        photo: "../assests/ParisPost.jpg",
        text: "This is my new dynamic post",
        comments: [
            {
                username: "Mihai",
                date: "21/01/2021",
                comment: "This is my first dynamic content",
            },
        ],
    },
];

const StartingPage = () => {
    //const [postData, setPostData] = useState(POST_DATA);
    const [postData, setDeletePost] = usePost(2000);

    const deletePost = (id) => {
        setDeletePost(id);
    }

    return (
        <div className={classes.mainContainer}>
            <LeftContent></LeftContent>
            <div className={classes.newsfeed}>
                <SharePost />
                {postData.map((post) => {
                    return <Newsfeed postData={post} removePost={deletePost} key={post.id} />;
                })}
            </div>
            <RightContent></RightContent>
        </div>
    );
};

export default StartingPage;
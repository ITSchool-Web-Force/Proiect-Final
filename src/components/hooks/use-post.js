import { useState, useEffect } from "react";

const POST_DATA = [
    {
        id: 0,
        username: "Benjamin",
        postDate: "05/04/2022",
        numberOfLikes: 45,
        numberOfShares: 12,
        photo: "../assests/firephoto.jpeg",
        text: "This is my new dynamic post",
        comments: [
            {
                username: "Alex",
                date: "21/01/2021",
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
        username: "Jacqueline",
        postDate: "20/07/2022",
        numberOfLikes: 12,
        numberOfShares: 4,
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
    {
        id: 1,
        username: "Ryan",
        postDate: "20/07/2022",
        numberOfLikes: 124,
        numberOfShares: 1,
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
    {
        id: 1,
        username: "Robin ",
        postDate: "20/07/2022",
        numberOfLikes: 234,
        numberOfShares: 35,
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
    {
        id: 1,
        username: "Jennifer",
        postDate: "20/07/2022",
        numberOfLikes: 22,
        numberOfShares: 3,
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
    {
        id: 1,
        username: "Julie",
        postDate: "20/07/2022",
        numberOfLikes: 78,
        numberOfShares: 12,
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

const usePost = (interval) => {
    const [post, setPost] = useState({
        postData: POST_DATA,
        changed: 0
    });

    useEffect(() => {
        const postInterval = setInterval(() => {
            setPost((prevState) => {
                if (prevState.postData.length > 3) {
                    clearInterval(postInterval);
                }

                let newPost;
                if (prevState.postData.length > 0) {
                    newPost = {
                        ...POST_DATA[prevState.postData.length % 2],
                        id: prevState.postData.length
                    };
                } else {
                    newPost = {
                        ...POST_DATA[prevState.postData[0]],
                        id: prevState.postData.length
                    };
                }

                return {
                    ...prevState,
                    postData: [newPost, ...prevState.postData]
                }
            });
        }, interval);

    }, [])

    const deletePost = (id) => {
        setPost((prevState) => {
            const removableElementIndex = prevState.postData.findIndex((post) => {
                return post.id === id;
            });

            prevState.postData.splice(removableElementIndex, 1);

            return {
                ...prevState,
                postData: prevState.postData,
            };
        });
    }

    return [post.postData, deletePost];
}
export default usePost;
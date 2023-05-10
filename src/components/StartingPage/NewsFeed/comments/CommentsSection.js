import classes from "./CommentsSection.module.scss";
import newPicture from "../../../../assets/nft-comments.jpeg";

const CommentsSection = (props) => {
    return (
        <div className={classes.comments}>
            <a href="#">
                <img
                    className={classes["rounded-circle"]}
                    id={classes.profilepic}
                    src={newPicture}
                    alt="Profile picture"
                />
            </a>
            <div className={classes.commentInfo}>
                <div>{props.commentData.username}</div>
                <div>{props.commentData.date}</div>
                <div>{props.commentData.comment}</div>
            </div>
        </div>
    );
};

export default CommentsSection;
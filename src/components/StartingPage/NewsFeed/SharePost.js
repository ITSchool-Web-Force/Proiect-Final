import classes from './SharePost.module.scss';
import { MdPermMedia, MdLabel, MdRoom, MdEmojiEmotions } from 'react-icons/md'
import MyProfilePic from '../../../assets/myProfilePic.png';

const SharePost = () => {
    return <div className={classes.share}>
        <div className={classes.shareContainer}>
            <div className={classes.shareTop}>
                <img className={classes.shareProfilImg} src={MyProfilePic} alt="profile image" />
                <input
                    placeholder="What's in your mind ?"
                    className={classes.inputShare}
                />
            </div>
            <hr className={classes.shareHr}></hr>
            <div className={classes.shareBottom}></div>
            <div className={classes.shareOptions}>
                <div className={classes.shareOption}>
                    <MdPermMedia style={{ color: "tomato" }} className={classes.shareIcon} />
                    <span className={classes.shareOptionText}>Photo or Video</span>
                </div>
                <div className={classes.shareOption}>
                    <MdLabel style={{ color: "blue" }} className={classes.shareIcon} />
                    <span className={classes.shareOptionText}>Tag</span>
                </div>
                <div className={classes.shareOption}>
                    <MdRoom style={{ color: "green" }} className={classes.shareIcon} />
                    <span className={classes.shareOptionText}>Location</span>
                </div>
                <div className={classes.shareOption}>
                    <MdEmojiEmotions style={{ color: "goldenrod" }} className={classes.shareIcon} />
                    <span className={classes.shareOptionText}>Feelings</span>
                </div>
                <button className={classes.shareButton}>Share</button>
            </div>
        </div>
    </div>
}
export default SharePost;
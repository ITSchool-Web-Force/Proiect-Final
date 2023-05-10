import classes from './RightContent.module.scss';
import BirthdayPicture from '../../../assets/birthday.png';
import AdImage from '../../../assets/nft-add.jpeg';
import GodFather from '../../../assets/Godfather.png';
import Profile2 from '../../../assets/profilepicture2.png';
import Profile3 from '../../../assets/profilepicture3.png';
import Profile4 from '../../../assets/profilepicture4.png';
import Profile5 from '../../../assets/profilepicture5.png';
import Profile6 from '../../../assets/profilepicture6.png';
import Profile7 from '../../../assets/profilepicture7.png';
import Profile8 from '../../../assets/profilepicture8.png';
import Profile0 from '../../../assets/profilepicture0.png';
import Profile9 from '../../../assets/profilepicture9.png';


const RightContent = () => {
    return (
        <aside className={classes.rightSideContent}>
            <div className={classes.rightbar}>
                <div className={classes.rightbarWrapper}>
                    <div className={classes.birthdayContainer}>
                        <img className={classes.birthdayImg} src={BirthdayPicture} alt="" />
                        <span className={classes.birthdayText}>
                            <b>Heath Houghton</b> and <b className={classes.otherFriends}>5 other friends </b> have a birthday today .
                        </span>
                    </div>
                    <img className={classes.rightbarAd} src={AdImage} alt="" />
                    <h4 className={classes.rightbarTitle}>Online Friends</h4>
                    <ul className={classes.rightbarFriendList}>
                        <li className={classes.rightbarFriend}>
                            <div className={classes.rightbarProfilePic}>
                                <img
                                    className={classes.profileImg}
                                    src={GodFather}
                                    alt="" />
                                <span className={classes.onlineStatus}></span>
                            </div>
                            <span className={classes.rightbarUsername}>Ammarah Sharples</span>
                        </li>
                        <li className={classes.rightbarFriend}>
                            <div className={classes.rightbarProfilePic}>
                                <img
                                    className={classes.profileImg}
                                    src={Profile2}
                                    alt="" />
                                <span className={classes.onlineStatus}></span>
                            </div>
                            <span className={classes.rightbarUsername}>Tariq Dunn</span>
                        </li>
                        <li className={classes.rightbarFriend}>
                            <div className={classes.rightbarProfilePic}>
                                <img
                                    className={classes.profileImg}
                                    src={Profile3}
                                    alt="" />
                                <span className={classes.onlineStatus}></span>
                            </div>
                            <span className={classes.rightbarUsername}>Priscilla Howell</span>
                        </li>
                        <li className={classes.rightbarFriend}>
                            <div className={classes.rightbarProfilePic}>
                                <img
                                    className={classes.profileImg}
                                    src={Profile8}
                                    alt="" />
                                <span className={classes.onlineStatus}></span>
                            </div>
                            <span className={classes.rightbarUsername}>Ewen Ryan</span>
                        </li>
                        <li className={classes.rightbarFriend}>
                            <div className={classes.rightbarProfilePic}>
                                <img
                                    className={classes.profileImg}
                                    src={Profile0}
                                    alt="" />
                                <span className={classes.onlineStatus}></span>
                            </div>
                            <span className={classes.rightbarUsername}>Edna Fuentes</span>
                        </li>
                        <li className={classes.rightbarFriend}>
                            <div className={classes.rightbarProfilePic}>
                                <img
                                    className={classes.profileImg}
                                    src={Profile6}
                                    alt="" />
                                <span className={classes.onlineStatus}></span>
                            </div>
                            <span className={classes.rightbarUsername}>Tatiana Dotson</span>
                        </li>
                        <li className={classes.rightbarFriend}>
                            <div className={classes.rightbarProfilePic}>
                                <img
                                    className={classes.profileImg}
                                    src={Profile7}
                                    alt="" />
                                <span className={classes.onlineStatus}></span>
                            </div>
                            <span className={classes.rightbarUsername}>Geraint Browning</span>
                        </li>
                        <li className={classes.rightbarFriend}>
                            <div className={classes.rightbarProfilePic}>
                                <img
                                    className={classes.profileImg}
                                    src={Profile4}
                                    alt="" />
                                <span className={classes.onlineStatus}></span>
                            </div>
                            <span className={classes.rightbarUsername}>Kaja Couch</span>
                        </li>
                        <li className={classes.rightbarFriend}>
                            <div className={classes.rightbarProfilePic}>
                                <img
                                    className={classes.profileImg}
                                    src={Profile9}
                                    alt="" />
                                <span className={classes.onlineStatus}></span>
                            </div>
                            <span className={classes.rightbarUsername}>Francesca Russo</span>
                        </li>
                        <li className={classes.rightbarFriend}>
                            <div className={classes.rightbarProfilePic}>
                                <img
                                    className={classes.profileImg}
                                    src={Profile5}
                                    alt="" />
                                <span className={classes.onlineStatus}></span>
                            </div>
                            <span className={classes.rightbarUsername}>Jett Bowen</span>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};
export default RightContent;
import classes from './LeftContent.module.scss';
import ProfilePicture from "../../../assets/nft.jpeg";
import anounceLogo from "../../../assets/Anounce.png";
import eventsLogo from "../../../assets/events.png";
import favoritesLogo from "../../../assets/favorites.png";
import friendsLogo from "../../../assets/friends.png";
import gamesLogo from "../../../assets/games.png";
import groupsLogo from "../../../assets/groups.png";
import marketplaceLogo from "../../../assets/marketplace.png";
import memoriesLogo from "../../../assets/memories.png";
import savedLogo from "../../../assets/saved.png";
import settingsLogo from "../../../assets/settings.png";
import weatherLogo from "../../../assets/weather.png";
import { Link } from 'react-router-dom';
import seemoreLogo from "../../../assets/seemore.png"
import { AiFillCaretDown } from 'react-icons/ai';
import monkeyPic from "../../../assets/nft-monkey.jpeg";
import MyProfilePic from '../../../assets/myProfilePic.png';
import { useState } from 'react';
import { text } from '@fortawesome/fontawesome-svg-core';


const LeftContent = () => {

    const [showMore, setShowMore] = useState(false);

    return (
        <aside className={classes.leftSideContent}>
            <div className={classes.homePage}>
                <img
                    src={MyProfilePic}
                    className={classes.roundedImg}
                />
                <Link to='/' className={classes.username}>Caraba Alex</Link>
                <div className={classes.line}></div>
            </div>

            <ul className={classes.leftColumn} >
                <li className={classes.flexIcons}>
                    <img src={friendsLogo} className={classes.roundedImg} />
                    <Link to='/' className={classes.iconsText}>Friends</Link>
                </li>
                <li className={classes.flexIcons}>
                    <img src={groupsLogo} className={classes.roundedImg} />
                    <Link to='/' className={classes.iconsText}>Groups</Link>
                </li>
                <li className={classes.flexIcons}>
                    <img src={anounceLogo} className={classes.roundedImg} />
                    <Link to='/' className={classes.iconsText}>Announce</Link>
                </li>
                <li className={classes.flexIcons}>
                    <img src={marketplaceLogo} className={classes.roundedImg} />
                    <Link to='/' className={classes.iconsText}>Marketplace</Link>
                </li>
                <li className={classes.flexIcons}>
                    <img src={memoriesLogo} className={classes.roundedImg} />
                    <Link to='/' className={classes.iconsText}>Memories</Link>
                </li>
                <li className={classes.flexIcons}>
                    <img src={eventsLogo} className={classes.roundedImg} />
                    <Link to='/' className={classes.iconsText}>Events</Link>
                </li>
                <li className={classes.flexIcons}>
                    <img src={savedLogo} className={classes.roundedImg} />
                    <Link to={'/saved'} className={classes.iconsText}>Saved</Link>
                </li>
                <li className={classes.flexIcons}>
                    <img src={gamesLogo} className={classes.roundedImg} />
                    <Link to='/' className={classes.iconsText}>Games</Link>
                </li>
                {/* <li className={classes.flexIcons}>
                    <img src={favoritesLogo} className={classes.roundedImg} />
                    <Link to='/' className={classes.iconsText}>Favorites</Link>
                </li>
                <li className={classes.flexIcons}>
                    <img src={weatherLogo} className={classes.roundedImg} />
                    <Link to='/weather' className={classes.iconsText}>Weather</Link>
                </li>
                <li className={classes.flexIcons}>
                    <img src={settingsLogo} className={classes.roundedImg} />
                    <Link to='/' className={classes.iconsText}>Settings</Link>
                </li> */}
            </ul>
            <div>


                <button
                    onClick={() => setShowMore((prevState) => !prevState)}
                    className={classes.seemoreButton}>
                    {showMore ? 'Show more' : 'Show less'}
                </button>

                {showMore ? '' : <ul className={classes.friendList}>
                    <hr className={classes.seemoreHr} />
                    <ul className={classes.leftColumn} >
                        <li className={classes.flexIcons}>
                            <img src={favoritesLogo} className={classes.roundedImg} />
                            <Link to='/' className={classes.iconsText}>Favorites</Link>
                        </li>
                        <li className={classes.flexIcons}>
                            <img src={weatherLogo} className={classes.roundedImg} />
                            <Link to='/weather' className={classes.iconsText}>Weather</Link>
                        </li>
                        <li className={classes.flexIcons}>
                            <img src={settingsLogo} className={classes.roundedImg} />
                            <Link to='/' className={classes.iconsText}>Settings</Link>
                        </li>
                    </ul>
                </ul>
                }

            </div>


        </aside>

    );
};
export default LeftContent;

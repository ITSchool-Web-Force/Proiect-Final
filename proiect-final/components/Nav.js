import MyButton from "./MyButton";
import style from "../styles/Nav.module.css";
import about from "../pages/about";
import Logo from "./Logo"
import index from "../pages/index"


export default function Nav() {
    return <div className={style.nav}>
        <Logo />
        <MyButton mybutton={{value:"home", link:"./"}}/>
        <MyButton mybutton={{value:"about", link:"./about"}}/>
        <MyButton mybutton={{value:"contact", link:"./contact"}}/>
        <MyButton mybutton={{value:"shop", link:"./contact"}}/>
    </div>
}
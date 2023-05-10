import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Navigation.module.scss";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import Logo from "../assets/logo.jpg";

const Navigation = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (state) => {
        if (state === "agree") {
            setOpen(false);
            navigate("/auth");
            setIsLoggedIn(!isLoggedIn);
        } else {
            setOpen(false);
        }
    };

    const login = () => {
        navigate("/");
        setIsLoggedIn(!isLoggedIn);
    };

    const toggleAuth = () => {
        isLoggedIn ? login() : handleClickOpen();
    };

    return (
        <div>
            <header className={classes.headerControl}>
                <h2 className={classes.logo}>Interact.</h2>
                <nav>
                    <ul className={classes.links}>
                        <li classes={classes.menuData}>
                            <Link to={'/'} className={classes.linkAdjust}>Newsfeed</Link>
                        </li>
                        <li classes={classes.menuData}>
                            <Link to={'/friends'} className={classes.linkAdjust}>Friends</Link>
                        </li>
                        <li classes={classes.menuData}>
                            <Link to={'/chat'} className={classes.linkAdjust}>Chat</Link>
                        </li>
                    </ul>
                </nav>
                <button onClick={toggleAuth} className={classes.loginBtn}>{isLoggedIn ? "Login" : "Logout"}</button>
            </header>

            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle className={classes.dialogTitle} id="alert-dialog-title">
                        {"Are you sure you want to Logout ?"}
                    </DialogTitle>
                    <DialogContent>
                        {/* <DialogContentText id="alert-dialog-description">
                 Are you sure you want to Logout ?
             </DialogContentText> */}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleClose('disagree')}>No</Button>
                        <Button variant="outlined" onClick={() => handleClose('agree')} autoFocus>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

        </div>
    );
};

export default Navigation;
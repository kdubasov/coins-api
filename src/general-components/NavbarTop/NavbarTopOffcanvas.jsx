import React from 'react';
import {Button, CloseButton, Offcanvas} from "react-bootstrap";
import NavbarInfo from "../NavbarInfo/NavbarInfo";

//css
import "./NavbarTopOffcanvas.css";
import {Link} from "react-router-dom";
import {getLang} from "../../functions/Lang/getLang";
import {getTheme} from "../../functions/Theme/getTheme";

const NavbarTopOffcanvas = ({show,handleClose,user,handleLogout}) => {
    return (
        <Offcanvas show={show} onHide={handleClose} backdrop="static" className={getTheme(true)}>
            <Offcanvas.Header>
                <div className={"left d-flex align-items-center"}>
                    {//check user is logged or not
                        user ?
                            <div className={"login-container"}>
                                <Link className={'small'} to={'/userProfile'}>
                                    {getLang() === 'rus' ? 'Аккаунт' : 'Account'}
                                </Link>
                                <Button size={"sm"} onClick={handleLogout} variant={"primary"}>
                                    {getLang() === 'rus' ? 'Выйти' : 'Sign out'}
                                </Button>
                            </div>:

                            <Link className={'small'} to={'/login'}>
                                <Button size={"sm"} variant={'primary'}>
                                    {getLang() === 'rus' ? 'Вход' : 'Sign in'}
                                </Button>
                            </Link>
                    }

                    {/*briefcase link*/}
                    <Link className={'small briefcase-link'} to={'/briefcase'}>
                        {getLang() === 'rus' ? 'Избранное' : 'Favorites'}
                    </Link>
                </div>

                {/*close button*/}
                <CloseButton
                    variant={getTheme(true) === "dark" ? "white" : "black"}
                    onClick={handleClose}
                />
            </Offcanvas.Header>

            <Offcanvas.Body>
                <NavbarInfo theme={getTheme(true)} />
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default NavbarTopOffcanvas;

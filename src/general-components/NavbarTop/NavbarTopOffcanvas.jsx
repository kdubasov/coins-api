import React from 'react';
import {Button, CloseButton, Offcanvas} from "react-bootstrap";
import NavbarInfo from "../NavbarInfo/NavbarInfo";

//css
import "./NavbarTopOffcanvas.css";
import {useNavigate} from "react-router-dom";
import {getLang} from "../../functions/Lang/getLang";
import {getTheme} from "../../functions/Theme/getTheme";
import FooterBottom from "../FooterBottom/FooterBottom";

const NavbarTopOffcanvas = ({show,handleClose,user,handleLogout}) => {

    const navigate = useNavigate();
    //go link and close menu
    const handleLink = url => {
        navigate(url);
        handleClose();
    }

    return (
        <Offcanvas show={show} onHide={handleClose} backdrop="static" className={getTheme(true)}>
            <Offcanvas.Header>
                <div className={"left d-flex align-items-center"}>
                    <img
                        src="/images/general-svg/favicon.svg"
                        alt="logo"
                        width={40}
                        style={{marginRight:20}}
                    />
                    {//check user is logged or not
                        user ?
                            <div className={"login-container"}>
                                <Button size={"sm"} onClick={handleLogout} variant={"primary"}>
                                    {getLang() === 'rus' ? 'Выйти' : 'Sign out'}
                                </Button>
                                <p
                                    onClick={() => handleLink('/userProfile')}
                                    className={'small text-white'}
                                    style={{margin:"0 5px 0 10px"}}
                                >
                                    {getLang() === 'rus' ? 'Аккаунт' : 'Account'}
                                </p>
                            </div>:

                            <Button size={"sm"} variant={'primary'} onClick={() => handleLink('/login')}>
                                {getLang() === 'rus' ? 'Вход' : 'Sign in'}
                            </Button>

                    }

                    {/*briefcase link*/}
                    <p
                        className={'small text-white m-0 mx-2'}
                        onClick={() => handleLink('/briefcase')}
                        style={{marginLeft:10}}
                    >
                        {getLang() === 'rus' ? 'Избранное' : 'Favorites'}
                    </p>
                </div>

                {/*close button*/}
                <CloseButton
                    variant={getTheme(true) === "dark" ? "white" : "black"}
                    onClick={handleClose}
                />
            </Offcanvas.Header>

            <Offcanvas.Body>
                <NavbarInfo theme={getTheme(true)} />
                <FooterBottom warningShow={false} />
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default NavbarTopOffcanvas;

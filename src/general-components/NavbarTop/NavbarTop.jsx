import React from 'react';
import {Button, Container, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useUserAuth} from "../../contexts/UserAuthContext";
import {useNavigate} from "react-router-dom";
import {getLang} from "../../functions/Lang/getLang";

// css
import "./NavbarTop.css";
import SearchInput from "../SearchMain/SearchInput";

const NavbarTop = ({theme}) => {

    //user data for check login
    const { user, logOut } = useUserAuth();
    const navigate = useNavigate();

    //logout the user
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/login");
        } catch (error) {
            console.log(error.message);
        }
    };


    return (
        <Navbar className={`NavbarTop ${theme}`}>
            <Container>

                <Link to={'/'}>
                    <img className={"logo"} src={`/images/NavbarTop/${theme}.svg`} alt=""/>
                </Link>

                <div className={"d-flex align-items-center"}>

                    {/*briefcase link*/}
                    <Link className={'small briefcase-link'} to={'/briefcase'}>
                        {getLang() === 'rus' ? 'Избранное' : 'Favorites'}
                    </Link>

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

                    {/*general search*/}
                    <SearchInput theme={theme} />
                </div>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;
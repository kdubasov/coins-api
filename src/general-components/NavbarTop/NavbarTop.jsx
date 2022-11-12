import React from 'react';
import {Button, Container, Navbar, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useUserAuth} from "../../contexts/UserAuthContext";
import {useNavigate} from "react-router-dom";
import {setTheme} from "../../functions/Theme/setTheme";
import {getTheme} from "../../functions/Theme/getTheme";
import {getLang} from "../../functions/Lang/getLang";
import {setLang} from "../../functions/Lang/setLang";

const NavbarTop = () => {

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
        <Navbar bg={getTheme()?'light':'dark'} variant={getTheme()?'light':'dark'} className="mb-3 small">
            <Container>
                <Link style={{fontSize:20}} to={'/'}>cryptoQuick</Link>

                <div className={"d-flex align-items-center"}>

                    {/*set theme*/}
                    <Form.Check
                        className={'text-primary m-0'}
                        type="switch"
                        label={getLang() === 'rus' ? "Светлая тема" : "Light Theme"}
                        checked={getTheme()}
                        onChange={() => setTheme()}
                    />

                    {/*set lang*/}
                    <Form.Select
                        size="sm"
                        style={{width:70}}
                        className={"mx-2"}
                        value={getLang()}
                        onChange={e => setLang(e.target.value)}
                    >
                        <option value={'eng'}>Eng</option>
                        <option value={'rus'}>Rus</option>
                    </Form.Select>

                    {/*briefcase link*/}
                    <Link className={'text-primary mx-3'} to={'/briefcase'}>
                        {getLang() === 'rus' ? 'Избранное' : 'Favorites'}
                    </Link>

                    {//check user is logged or not
                        user ?
                            <div className={'d-flex justify-content-between align-items-center'}>
                                <Link className={'text-primary mx-3'} to={'/userProfile'}>
                                    {getLang() === 'rus' ? 'Аккаунт' : 'Account'}
                                </Link>
                                <Button size={"sm"} onClick={handleLogout} variant={"primary"}>
                                    {getLang() === 'rus' ? 'Выйти' : 'Sign out'}
                                </Button>
                            </div>:
                            <Link className={"mx-3"} to={'/login'}>
                                <Button size={"sm"} variant={'light'}>
                                    {getLang() === 'rus' ? 'Вход' : 'Sign in'}
                                </Button>
                            </Link>
                    }
                </div>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;
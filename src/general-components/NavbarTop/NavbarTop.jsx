import React from 'react';
import {Button, Container, Navbar, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useUserAuth} from "../../contexts/UserAuthContext";
import {useNavigate} from "react-router-dom";
import {setTheme} from "../../functions/Theme/setTheme";
import {getTheme} from "../../functions/Theme/getTheme";

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
                    <Form.Check
                        className={'text-primary m-0'}
                        type="switch"
                        label="Светлая тема"
                        checked={getTheme()}
                        onChange={() => setTheme()}
                    />

                    {//check user is logged or not
                        user ?
                            <div className={'d-flex justify-content-between align-items-center'}>
                                <Link className={'text-primary mx-3'} to={'/briefcase'}>Избранное</Link>
                                <Link className={'text-primary mx-3'} to={'/userProfile'}>Аккаунт</Link>
                                <Button size={"sm"} onClick={handleLogout} variant={"primary"}>Выйти</Button>
                            </div>:
                            <Link className={"mx-3"} to={'/login'}>
                                <Button size={"sm"} variant={'light'}>Вход</Button>
                            </Link>
                    }
                </div>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;